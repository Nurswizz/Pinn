const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_URI } = process.env || "mongodb://localhost:27017/pinn_app";

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};
module.exports = connectDB;
