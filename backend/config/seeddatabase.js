import dotenv from "dotenv";

import { Product } from "../models/productSchema";

dotenv.config();

import productsData from "../data/productsfromAI.json";

if (process.env.RESET_DB === "true") {
  const seedDatabase = async () => {
    await Product.deleteMany({});
    console.log("seeding data")

    productsData.forEach((productData) => {
      new Product(productData).save();
    });
  };
  seedDatabase();
}
