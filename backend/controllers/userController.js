import { User } from "../models/User";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

export const registerUser = asyncHandler(async (req, res) => {
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

export const loginUser = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).exec();

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

export const deleteUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.deleteOne({ _id: userId });
    console.log(user);
    res.status(200).json({
      message: "Delete Successful.",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Could not delete. Something is wrong.",
      success: false,
      error: error.message,
    });
  }
});

export const displayUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findOne(
      { _id: userId },
      "username email accessToken"
    ).exec();
    res.status(200).json({
      message: user,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Could not show user info. Something is wrong.",
      success: false,
      error: error.message,
    });
  }
});
