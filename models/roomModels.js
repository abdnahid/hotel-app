var mongoose = require('mongoose');

const roomFeatureSchema = new mongoose.Schema({
  wifi: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
});

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter room name'],
    trim: true,
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Please Enter price'],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, 'Please Enter description'],
  },
  address: {
    type: String,
    required: [true, 'Please Enter address'],
  },
  location: {
    type: String,
    required: true,
  },
  guestCapacity: {
    type: Number,
    required: [true, 'Please Enter guest capacity'],
  },
  numOfBeds: {
    type: Number,
    required: [true, 'Please Enter number of beds'],
  },
  rating: {
    type: Number,
    default: 0.0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  features: roomFeatureSchema,
  images: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    enum: {
      values: ['twins', 'king', 'single'],
      message: 'Please enter room category',
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      rating: {
        type: Number,
        required: [true, 'Please give a rating'],
      },
      comment: {
        type: String,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);
