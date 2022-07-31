var mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter room name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter your correct email"],
  },
  photo: {
    type: String,
  },
  loginMethod: {
    type: String,
    required: [true, "Please Enter a valid login method"],
  },
  subscriberId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports =
  mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);
