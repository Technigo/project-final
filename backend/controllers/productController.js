import { Product } from "../models/Product";
import asyncHandler from "express-async-handler";

export const displayProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find().select("-__v").exec();
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      message: "Could not retreive all the templates.",
      success: false,
      error: error.message,
    });
  }
});

export const displayProductById = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  console.log(productId);
  try {
    const product = await Product.findOne({ _id: productId }).exec();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Could not find the template.",
      success: false,
      error: error.message,
    });
  }
});
