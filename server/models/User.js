const mongoose = require('mongoose');

// When integrated with email verification, the User model can include fields for email verification status and tokens.

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 3,
//     maxlength: 30,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   isEmailVerified: {
//     type: Boolean,
//     default: false,
//   },
//   emailVerificationToken: {
//     type: String,
//   },
//   emailVerificationExpires: {
//     type: Date,
//   },
//   resetPasswordToken: {
//     type: String,
//   },
//   resetPasswordExpires: {
//     type: Date,
//   },
//   metadata: {
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     lastLogin: {
//       type: Date,
//       default: null,
//     },
//   },
// }, {
//   timestamps: true, 
// });
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  metadata: {
    lastLogin: {
      type: Date,
      default: new Date(),
    },
  },
}, {
  timestamps: true, 
});

const User = mongoose.model('User', userSchema);
module.exports = User;
