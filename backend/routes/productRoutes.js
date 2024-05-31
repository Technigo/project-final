import express from "express";
import {
  displayProducts,
  displayProductById,
} from "../controllers/productController";

const router = express.Router();

router.get("/products", displayProducts);

router.get("/products/:productId", displayProductById);

export default router;
