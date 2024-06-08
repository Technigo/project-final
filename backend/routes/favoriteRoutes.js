import express from "express";
import {
  isMuseumLiked,
  toggleFavorite,
} from "../controllers/favoriteController.js";

const router = express.Router();

router.post("/favorites", toggleFavorite);

router.post("/favorites/:museumId", isMuseumLiked);

export default router;
