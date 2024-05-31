import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import expressListEndpoints from "express-list-endpoints";

import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
dotenv.config();
import { Product } from "./models/Product";
import webTemplates from "./data/webTemplates.json";
import { errorHandler } from "./middleware/handleError";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-final";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

//Seed data to database
if (process.env.RESET_DB) {
  const seedProductDatabase = async () => {
    await Product.deleteMany();
    webTemplates.forEach(template => {
      new Product(template).save();
    });
  };
  seedProductDatabase();
}

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.send(endpoints);
});

// routes
app.use(userRoutes);
app.use(productRoutes);

// gloabl error handling
app.use((req, res, next) => {
  const err = new Error(`Cannot find endpoint: ${req.originalUrl}.`);
  err.statusCode = 404;
  next(err);
});
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
