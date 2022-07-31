var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter room name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter your correct email"],
  },
  image: {
    type: String,
  },
  emailVerified: {
    type: String,
    default: null,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  username: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
