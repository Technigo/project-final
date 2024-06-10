import cors from "cors";
import express from "express";
import expressListEndpoints from "express-list-endpoints";
import { errorHandler } from "./middleware/handleError";
import productRoutes from "./routes/products";
import userRoutes from "./routes/users";
import mockupRoutes from "./routes/mockups";
import { connectMongoDB } from "./config/database";

connectMongoDB();

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(express.json());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.send(endpoints);
});

// routes
app.use(userRoutes);
app.use(productRoutes);
app.use(mockupRoutes);

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
