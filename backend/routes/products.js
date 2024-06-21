import express from "express";
import {
  displayProducts,
  displayProductById,
  likeOrUnlikeProductById,
} from "../controllers/productController";

const router = express.Router();

router.get("/products", displayProducts);

router.get("/products/:productId", displayProductById);

router.patch("/products/:productId", likeOrUnlikeProductById);

export default router;
