import mongoose from "../config/database.js";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  templateName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  tags: { type: String, required: false },
  likes: { type: Number, default: 0 },
  image: { type: String, required: false },
});

export const Product = model("Product", productSchema);
