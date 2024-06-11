import { User } from "../models/User";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import { Product } from "../models/Product";

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
    );
    res.status(200).json({
      message: "Delete the item from the cart successfully",
      data: user,
    });
  } else {
    const product = await Product.findOne({ _id: productId }).exec();
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { cartItems: product } },
      {
        new: true,
      }
    ).exec();
    res
      .status(200)
      .json({ message: "Add the item to the cart successfully", data: user });
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
    );
    res.status(200).json({
      message: "Delete the item from the favorites successfully",
      data: user,
    });
  } else {
    const product = await Product.findOne({ _id: productId }).exec();
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { favoriteTemplates: product } },
      {
        new: true,
      }
    ).exec();
    res.status(200).json({
      message: "Add the item to the favorites successfully",
      data: user,
    });
  }
});
