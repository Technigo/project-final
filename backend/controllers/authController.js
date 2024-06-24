import bcrypt from "bcrypt";
import { User } from "../models/User.js";

// User registration
export const registerUser = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);

  try {
    const { name, email, password } = req.body;

    if (name === "" || email === "" || password === "") {
      res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({
      name,
      email,
      id: crypto.randomUUID(),
      password: bcrypt.hashSync(password, salt),
    });

    await user.save();

    return res
      .status(201)
      .json({ id: user._id, accessToken: user.accessToken });
  } catch (error) {
    res.status(400).json({
      response: error.message,
      success: false,
      message: "Could not create user",
      errors: error.errors,
    });
  }
};

// User login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() });
  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ userId: user._id, accessToken: user.accessToken });
  } else if (user && !bcrypt.compareSync(password, user.password)) {
    // Wrong password
    res.status(400).json({});
  } else {
    // User does not exist
    res.status(404).json({});
  }
};

export const getUserPage = (req, res) => {
  res.json({ message: "You are logged in!", user: req.user });
};
