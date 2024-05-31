import { Product } from "../models/productSchema";
import dotenv from "dotenv";

dotenv.config();

import productsData from "../data/productsfromAI.json";

if (process.env.RESET_DB === "true") {
  const seedDatabase = async () => {
    await Product.deleteMany({});

    productsData.forEach((productData) => {
      new Product(productData).save();
    });
  };
  seedDatabase();
}
