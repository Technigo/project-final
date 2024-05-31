import { User } from "../models/User";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({
    username,
    email,
    password: bcrypt.hashSync(password, 10),
  });
  await user.save();
  res.status(201).json({ message: "Sign up successfully", success: true });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).exec();

  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).json({
      message: "Login Successful.",
      success: true,
      accessToken: user.accessToken,
      id: user.id,
    });
  } else if (user) {
    const err = new Error("Incorrect password");
    err.statusCode = 401;
    throw err;
  } else {
    const err = new Error("Invalid username");
    err.statusCode = 401;
    throw err;
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const user = await User.deleteOne({ _id: userId });
  console.log(user);
  res.status(200).json({
    message: "Delete Successful.",
    success: true,
  });
});

export const displayUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOne(
    { _id: userId },
    "username email accessToken"
  ).exec();
  res.status(200).json({
    message: user,
    success: true,
  });
});
