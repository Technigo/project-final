import { Product } from "../models/Product";
import asyncHandler from "express-async-handler";

export const displayProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().select("-__v -description").exec();
  res.status(200).json(products);
});

export const displayProductById = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findOne({ _id: productId }, "-__v").exec();
  res.status(200).json(product);
});

export const likeOrUnlikeProductById = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { unlike } = req.body;
  const product = await Product.findOne({ _id: productId });
  if (unlike) {
    product.likes--;
    await product.save();
  } else {
    product.likes++;
    await product.save();
  }
  res.status(200).json(product);
});
