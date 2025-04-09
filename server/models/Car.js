const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
    index: true
  },
  model: {
    type: String,
    required: true,
    index: true
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  fuelType: {
    type: String,
    enum: ['Gas', 'Electricity', 'Hybrid', 'Plug-In'],
    required: true
  },
  transmission: {
    type: String,
    enum: ['Automatic', 'Manual'],
    default: 'Automatic'
  },
  driveType: {
    type: String,
    enum: ['FWD', 'RWD', 'AWD'],
    required: true
  },
  mpg: {
    type: Number,
    required: true
  },
  images: [String],
  specifications: {
    engine: String,
    horsepower: Number,
    torque: Number,
    seats: Number
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Car', CarSchema);