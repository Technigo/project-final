import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import expressListEndpoints from "express-list-endpoints";

import User from "./models/User";

dotenv.config();

// MongoDB connection setup
const mongoUrl =
  process.env.MONGO_URL ||
  "mongodb+srv://paula010514:uVSJuieDMQhHDeV4@paula.5q34khs.mongodb.net/?retryWrites=true&w=majority&appName=Paula";
mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Endpoints route
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints);
});

// Registration endpoint
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed successfully");

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Generate JWT
    const token = jwt.sign(
      { id: newUser._id, username: newUser.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error loggin in:", error);
    res.status(500).json({ error: "Login failed" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
