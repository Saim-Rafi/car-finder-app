const Car = require("../models/Car");

// Sample car data
const carData = [
  {
    make: "Honda",
    model: "Odyssey",
    year: 2023,
    price: 52,
    fuelType: "Gas",
    transmission: "Automatic",
    driveType: "FWD",
    mpg: 19,
    images: ["https://example.com/honda-odyssey.jpg"],
    specifications: {
      engine: "3.5L V6",
      horsepower: 280,
      torque: 262,
      seats: 7,
    },
  },
  {
    make: "Kia",
    model: "Stinger",
    year: 2023,
    price: 52,
    fuelType: "Gas",
    transmission: "Automatic",
    driveType: "AWD",
    mpg: 21,
    images: ["https://example.com/kia-stinger.jpg"],
    specifications: {
      engine: "2.5L Turbo",
      horsepower: 300,
      torque: 311,
      seats: 5,
    },
  },
  {
    make: "Kia",
    model: "Stinger",
    year: 2023,
    price: 52,
    fuelType: "Gas",
    transmission: "Automatic",
    driveType: "RWD",
    mpg: 22,
    images: ["https://example.com/kia-stinger-rwd.jpg"],
    specifications: {
      engine: "2.5L Turbo",
      horsepower: 300,
      torque: 311,
      seats: 5,
    },
  },
  {
    make: "Hyundai",
    model: "Tucson",
    year: 2023,
    price: 53,
    fuelType: "Gas",
    transmission: "Automatic",
    driveType: "FWD",
    mpg: 26,
    images: ["https://example.com/hyundai-tucson.jpg"],
    specifications: {
      engine: "2.5L I4",
      horsepower: 187,
      torque: 178,
      seats: 5,
    },
  },
  {
    make: "Hyundai",
    model: "Tucson",
    year: 2023,
    price: 52,
    fuelType: "Gas",
    transmission: "Automatic",
    driveType: "AWD",
    mpg: 24,
    images: ["https://example.com/hyundai-tucson-awd.jpg"],
    specifications: {
      engine: "2.5L I4",
      horsepower: 187,
      torque: 178,
      seats: 5,
    },
  },
  {
    make: "Hyundai",
    model: "Tucson",
    year: 2023,
    price: 54,
    fuelType: "Hybrid",
    transmission: "Automatic",
    driveType: "AWD",
    mpg: 37,
    images: ["https://example.com/hyundai-tucson-hybrid.jpg"],
    specifications: {
      engine: "1.6L Turbo Hybrid",
      horsepower: 227,
      torque: 258,
      seats: 5,
    },
  },
  // Add more cars as needed
];

const seedDB = async () => {
  try {
    // Clear existing data
    await Car.deleteMany({});

    // Insert sample data
    await Car.insertMany(carData);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

module.exports = { seedDB };
