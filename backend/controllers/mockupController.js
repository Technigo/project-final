import { Product } from "../models/Product.js";
import asyncHandler from "express-async-handler";

export const uploadMockup = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const product = await Product.findOne({ templateName: name }).exec();
  product.image = req.file.path;
  await product.save();
  res.status(200).json({
    success: true,
    imageUrl: req.file.path,
    imageId: req.file.filename,
  });
});
