//README:https://expressjs.com/en/guide/routing.html
//Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
import express from "express";

import {
  deleteUser,
  displayUser,
  handleCart,
  handleFavorite,
  loginUser,
  registerUser,
} from "../controllers/userController";
import { authenticateUser } from "../middleware/authenticateUser";

const router = express.Router();

router.post("/users/signup", registerUser);

router.post("/users/login", loginUser);

router.get("/users/:userId", authenticateUser, displayUser);

router.post("/users/:userId/favorites", authenticateUser, handleFavorite);

router.post("/users/:userId/cart", authenticateUser, handleCart);

router.delete("/users/:userId", authenticateUser, deleteUser);

export default router;
