import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import expressListEndpoints from "express-list-endpoints";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/Cones&Stones";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

// Create product mongoose-schema & model
// Destructure schema & model
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  sizes: {
    type: [String], // Array of strings to handle sizes like "80/86", "90/96"
    reguired: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["bottoms", "tops", "accessories"], // Only allow specific categories
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
   // Middleware to check if database in a good state, get the next, otherwise error-message
  if (mongoose.connection.readyState === 1 ) {
    next();
  } else {
    res.status(503).json({error: "Service unavailable"})
  }
});

// Start defining your routes here
// http://localhost:8080/
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints);
});



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
