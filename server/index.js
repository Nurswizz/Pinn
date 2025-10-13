const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const connectDB = require('./config/db');

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;