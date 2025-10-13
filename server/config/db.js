const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI } = process.env;
// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};
module.exports = connectDB;
