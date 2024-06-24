import express from "express";
import {
  isMuseumLiked,
  toggleFavorite,
  likedMuseums,
} from "../controllers/favoriteController.js";

const router = express.Router();

router.post("/favorites/toggle", toggleFavorite);
router.post("/favorites/:museumId", isMuseumLiked);
router.post("/favorites", likedMuseums);

export default router;
