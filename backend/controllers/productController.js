import { Product } from "../models/Product";
import asyncHandler from "express-async-handler";
import webTemplates from "../data/webTemplates.json";

export const displayProducts = asyncHandler(async (req, res) => {
  // seed the data to the database when necessary
  if (process.env.RESET_DB) {
    const seedProductDatabase = async () => {
      await Product.deleteMany();
      webTemplates.forEach(template => {
        new Product(template).save();
      });
    };
    await seedProductDatabase();
  }
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
