const User = require("../models/User");
const { hashPassword, comparePassword } = require("../utils/crypt");
const { generateTokens, verifyToken } = require("../utils/token");

const transformUser = (user) => {
  return {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    // isEmailVerified: user.isEmailVerified,
    metadata: user.metadata,
  };
};
const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found", status: 404 });
      }
      const isPasswordValid = await comparePassword(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Invalid password", status: 401 });
      }
      const transformedUser = transformUser(user);
      const { accessToken, refreshToken } = generateTokens(user);
      // Last Login Update
      user.metadata.lastLogin = new Date();
      await user.save();
      return res
        .status(200)
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "None",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .json({ user: transformedUser, accessToken, status: 200 });
    } catch (error) {
      console.error("Error logging in user:", error);
      return res
        .status(500)
        .json({ message: "Internal server error", status: 500 });
    }
  },
  register: async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", status: 400 });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    try {
      const savedUser = await newUser.save();
      const transformedUser = transformUser(savedUser);
      const { accessToken, refreshToken } = generateTokens(savedUser);
      return res
        .status(201)
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "None",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .json({ user: transformedUser, accessToken, status: 201 });
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Refresh token expired" });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  logout: async (req, res) => {
    return res
      .status(200)
      .clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
        maxAge: 0,
      })
      .json({ message: "Logged out successfully", status: 200 });
  },
  refreshToken: async (req, res) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res
        .status(401)
        .json({ message: "Refresh token is required", status: 401 });
    }
    try {
      const decoded = verifyToken(refreshToken, "refresh");
      if (!decoded) {
        return res
          .status(401)
          .json({ message: "Invalid refresh token", status: 401 });
      }
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ message: "User not found", status: 404 });
      }
      const { accessToken, refreshToken: newRefreshToken } =
        generateTokens(user);
      return res
        .status(200)
        .cookie("refreshToken", newRefreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "None",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .json({ accessToken, status: 200 });
    } catch (error) {
      console.error("Error refreshing token:", error);
      return res
        .status(500)
        .json({ message: "Internal server error", status: 500 });
    }
  },
};

module.exports = authController;
