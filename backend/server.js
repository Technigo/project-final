import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import User from "./models/User";

dotenv.config();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-final";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

//route for signing up user
app.post("/users/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({
      username,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    await user.save();
    res.status(201).json({ message: "Sign up successfully", success: true });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      message: "Could not sign up.",
      success: false,
      error: error.message,
    });
  }
});

//route for login user
app.post("/users/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        message: "Login Successful.",
        success: true,
        accessToken: user.accessToken,
      });
    } else if (user) {
      res.status(401).json({
        message: "Could not login.",
        success: false,
        error: "Incorrect password",
      });
    } else {
      res.status(401).json({
        message: "Could not login.",
        success: false,
        error: "Invalid username",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Could not login. Something is wrong.",
      success: false,
      error: error.message,
    });
  }
});

//route for display user page
app.post("/users/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
  } catch (error) {}
});

//route for delete user account
app.delete("/users/:id", async (req, res) => {});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
