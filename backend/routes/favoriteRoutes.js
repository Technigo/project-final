import express from "express"
import { toggleFavorite } from "../controllers/favoriteController.js"

const router = express.Router()

router.post("/favorites", toggleFavorite)

export default router
