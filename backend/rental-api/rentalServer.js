import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expressListEndpoints from "express-list-endpoints";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";

import Rental from "./models/Rental";
import Order from "./models/Order";

dotenv.config();

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

    await Rental.deleteMany();
    console.log("Existing rentals deleted");

    const insertedRentals = await Rental.insertMany(rentals);

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

    // Extract numeric value from price string
    const priceMatch = rental.price.match(/\d+(\.\d+)?/);
    const price = parseFloat(priceMatch[0]);

    cart.push({
      rental: rental,
      price: price,
      amount: 1,
    });

    res.status(201).json({ message: "Rental added to cart:", cart });
  } catch (error) {
    console.error("Error adding rental to cart:", error);
    res.status(500).json({ error: "Failed to add rental to cart" });
  }
});

// Get cart items
app.get("/api/cart", (req, res) => {
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  res.json({ cart, totalPrice: `${totalPrice.toFixed(2)}` });
});

// Remove Rental from cart
app.delete("/api/cart/:id", (req, res) => {
  const { id } = req.params;

  if (!cart) {
    return res.status(500).json({ error: "Cart is not initialized" });
  }

  cart = cart.filter((item) => {
    if (item && item.rental && item.rental._id.toString() === id) {
      return false;
    }
    return true;
  });

  res.json({ message: "Rental removed from cart", cart });
});

// Clear cart
app.delete("/api/cart", (req, res) => {
  cart = [];
  res.json({ message: "Cart cleared", cart });
});

const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      console.error("Missing or invalid authprization header");
      return res.status(401).json({ error: "Unauthorized" });
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

// Handle orders
app.post("/api/orders", authenticateUser, async (req, res) => {
  const { startDate, endDate, deliveryAddress, customerEmail } = req.body;

  try {
    console.log("Received order request:", req.body);
    if (
      !startDate ||
      !endDate ||
      !deliveryAddress ||
      !customerEmail ||
      cart.length === 0
    ) {
      return res
        .status(400)
        .json({ error: "Missing required fields or cart is empty" });
    }

    const orderItems = req.session.cart.map((item) => {
      console.log("Item rental:", item.rental);
      console.log("Item rental name:", item.rental.name);
      return {
        rental: item.rental._id,
        name: item.rental.name,
        amount: item.amount,
      };
    });

    const totalPrice = cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      return total + itemPrice * item.amount;
    }, 0);

    if (isNaN(totalPrice)) {
      throw new Error("Total price calculation failed");
    }
    const newOrder = new Order({
      startDate,
      endDate,
      deliveryAddress,
      customerEmail,
      items: orderItems,
      totalPrice,
    });

    const savedOrder = await newOrder.save();
    console.log("Order placed successfully", savedOrder);

    cart = [];

    res
      .status(201)
      .json({ message: "Order placed successfully", order: savedOrder });
  } catch (error) {
    console.error("Error placing order", error);
    res.status(500).json({ error: "Failed to place order" });
  }
});

// Get all orders
app.get("/api/orders", authenticateUser, async (req, res) => {
  try {
    const orders = await Order.find().populate("items.rental");
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
