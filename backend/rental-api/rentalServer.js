import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import expressListEndpoints from "express-list-endpoints";
import path from "path";
import fs from "fs";

import Rental from "./models/Rental";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/rental-items";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Serve images from frontend public folder
app.use(
  "/images",
  express.static(path.join(__dirname, "../frontend/public/images/images"))
);

// Seed the database
const seedDB = async () => {
  try {
    const data = fs.readFileSync(
      path.join(__dirname, "data/rentals.json"),
      "utf8"
    );
    const rentals = JSON.parse(data).rentals;

    console.log("Parsed Rentals Data:", rentals);

    await Rental.deleteMany();
    console.log("Existing rentals deleted");

    const insertedRentals = await Rental.insertMany(rentals);
    console.log("Inserted rentals:", insertedRentals);

    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Error seeding database", err);
  }
};

// Call seed function
seedDB();

// Define routes
// http://localhost:8080/
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints);
});

// Get all rentals
app.get("/api/rentals", async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.json(rentals);
  } catch (error) {
    console.error("Error fetching rentals:", error);
    res.status(500).json({ error: "Failed to fetch rentals " });
  }
});

let cart = [];

// Add rental to cart
app.post("/api/cart", async (req, res) => {
  const { id } = req.body;

  try {
    const rental = await Rental.findById(id);
    if (!rental) {
      return res.status(400).json({ error: "Rental not found" });
    }

    cart.push(rental);
    res.status(201).json({ message: "Rental added to cart:", cart });
  } catch (error) {
    console.error("Error adding rental to cart:", error);
    res.status(500).json({ error: "Failed to add rental to cart" });
  }
});

// Get cart items
app.get("/api/cart", (req, res) => {
  const totalPrice = cart.reduce((total, item) => {
    const priceString = item.price.replace("€", "").replace(" / week", "");
    const price = parseFloat(priceString) || 0;
    return total + price;
  }, 0);

  res.json({ cart, totalPrice: `${totalPrice.toFixed(2)}` });
});

// Remove Rental from cart
app.delete("/api/cart/:id", (req, res) => {
  const { id } = req.params;

  cart = cart.filter((item) => item._id.toString() !== id);

  res.json({ message: "Rental removed from cart", cart });
});

// Clear cart
app.delete("/api/cart", (req, res) => {
  cart = [];
  res.json({ message: "Cart cleared", cart });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
