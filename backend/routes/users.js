import express from "express";

import {
  clearCart,
  deleteUser,
  displayUser,
  handleCart,
  handleFavorite,
  loginUser,
  registerUser,
} from "../controllers/userController";
import { createSession } from "../controllers/checkoutController";

import { authenticateUser } from "../middleware/authenticateUser";

const router = express.Router();

router.post("/users/signup", registerUser);

router.post("/users/login", loginUser);

router.get("/users/:userId", authenticateUser, displayUser);

router.delete("/users/:userId", authenticateUser, deleteUser);

router.post("/users/:userId/favorites", authenticateUser, handleFavorite);

router.post("/users/:userId/cart", authenticateUser, handleCart);

router.delete("/users/:userId/cart", authenticateUser, clearCart);

router.post("/users/:userId/checkout", authenticateUser, createSession);

export default router;
