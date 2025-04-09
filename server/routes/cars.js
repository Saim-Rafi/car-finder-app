const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Get all cars with filtering
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    // Build query from filters
    const query = {};
    
    if (req.query.make) {
      query.make = new RegExp(req.query.make, 'i');
    }
    
    if (req.query.model) {
      query.model = new RegExp(req.query.model, 'i');
    }
    
    if (req.query.fuelType) {
      query.fuelType = req.query.fuelType;
    }
    
    if (req.query.driveType) {
      query.driveType = req.query.driveType;
    }
    
    if (req.query.minPrice && req.query.maxPrice) {
      query.price = { $gte: parseInt(req.query.minPrice), $lte: parseInt(req.query.maxPrice) };
    } else if (req.query.minPrice) {
      query.price = { $gte: parseInt(req.query.minPrice) };
    } else if (req.query.maxPrice) {
      query.price = { $lte: parseInt(req.query.maxPrice) };
    }
    
    if (req.query.year) {
      query.year = parseInt(req.query.year);
    }
    
    // Execute query with pagination
    const cars = await Car.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
    // Get total count for pagination
    const total = await Car.countDocuments(query);
    
    res.json({
      cars,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    
    res.json(car);
  } catch (error) {
    console.error('Error fetching car:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Additional routes for admin functionality (add/update/delete cars)
// ...

module.exports = router;