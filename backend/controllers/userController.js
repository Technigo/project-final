import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

import { Product } from "../models/Product";
import { User } from "../models/User";

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
  res.status(200).json({
    message: "Delete Successful.",
    success: true,
  });
});

export const displayUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOne({ _id: userId }, "username email accessToken")
    .populate("cartItems")
    .populate("favoriteTemplates")
    .exec();
  res.status(200).json({
    message: user,
    success: true,
  });
});

export const handleCart = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { productId, remove } = req.body;
  if (remove) {
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { cartItems: productId } },
      { new: true }
    )
      .select("cartItems -_id")
      // .populate("cartItems", " -__v")
      .exec();
    res.status(200).json(user);
  } else {
    const product = await Product.findOne({ _id: productId }).exec();
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { cartItems: product } },
      {
        new: true,
      }
    )
      .select("cartItems -_id")
      // .populate("cartItems", "-__v")
      .exec();
    res.status(200).json(user);
  }
});

export const handleFavorite = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { productId, remove } = req.body;
  if (remove) {
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { favoriteTemplates: productId } },
      { new: true }
    )
      .select("favoriteTemplates -_id")
      // .populate("favoriteTemplates", " -__v")
      .exec();
    res.status(200).json(user);
  } else {
    const product = await Product.findOne({ _id: productId }).exec();
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { favoriteTemplates: product } },
      {
        new: true,
      }
    )
      .select("favoriteTemplates -_id")
      // .populate("favoriteTemplates", " -__v")
      .exec();
    res.status(200).json(user);
  }
});

export const clearCart = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOneAndUpdate(
    { _id: userId },
    { $set: { cartItems: [] } },
    { new: true }
  )
    .select("cartItems -_id")
    .exec();
  res.status(200).json(user);
});
