import cors from "cors";
import express from "express";
import expressListEndpoints from "express-list-endpoints";
import mongoose from "mongoose";

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
  details: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  stock: [
    {
      // ex. { "size": "80/86", "quantity": 10 }, { "size": "90/96", "quantity": 15 }
      size: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["bottoms", "tops", "dresses", "accessories"], // Only allow specific categories
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

// Middleware to check if database in a good state, get the next, otherwise error-message
const checkDatabaseConnection = (req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    res.status(503).json({ error: "Service unavailable" });
  }
};

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());
app.use(checkDatabaseConnection);

// Start defining your routes here
// http://localhost:8080/
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints);
});

// GET all products
// http://localhost:8080/products
app.get("/products", async (req, res) => {
  try {
    // Possibility to filter on color and/or size
    const { color, size } = req.query;
    let filter = {};

    if (color) {
      filter.color = color;
    }

    if (size) {
      filter["stock.size"] = size;
    }

    const products = await Product.find();

    if (products.length > 0) {
      res.status(200).json({
        success: true,
        response: products,
        message: "Products retrieved successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        error: {
          message: "No products found",
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: "Internal server error",
      },
    });
  }
});

// GET single product by id
// http://localhost:8080/products/:productId
app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId).exec();
    if (product) {
      res.status(200).json({
        success: true,
        response: product,
        message: "Product was found successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        error: {
          message: "Product not found",
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: "Internal server error",
      },
    });
  }
});

// GET products by category
// http://localhost:8080/products/category/:category
app.get("/products/category/:category", async (req, res) => {
  const { category } = req.params;
  const validCategories = ["bottoms", "tops", "dresses", "accessories"];

  if (!validCategories.includes(category)) {
    return res.status(400).json({
      success: false,
      error: {
        message: "Invalid category",
      },
    });
  }

  try {
    const productsByCategory = await Product.find({ category });
    if (productsByCategory.length > 0) {
      res.status(200).json({
        success: true,
        response: productsByCategory,
        message: "Products retrieved successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        error: {
          message: "No products found in this category",
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: "Internal server error",
      },
    });
  }
});

// GET a single product within a category by id
// http://localhost:8080/products/category/:category/productId
app.get("/products/category/:category/:productId", async (req, res) => {
  const { category, productId } = req.params;
  const validCategories = ["bottoms", "tops", "dresses", "accessories"];

  if (!validCategories.includes(category)) {
    return res.status(400).json({
      success: false,
      error: {
        message: "Invalid category",
      },
    });
  }

  try {
    const product = await Product.findById(productId);
    if (!product || product.category !== category) {
      return res.status(404).json({
        success: false,
        error: {
          message: "Product not found in specified category",
        },
      });
    }
    return res.status(200).json({
      success: true,
      response: product,
      message: "Product retrieved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: {
        message: "Internal server error",
      },
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
