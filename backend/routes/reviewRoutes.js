import express from "express"
import {
  getReviews,
  postReviews,
  deleteReviews,
} from "../controllers/reviewController.js"

const router = express.Router()

router.get("/reviews", getReviews)
router.post("/reviews", postReviews)
router.delete("/reviews/:id", deleteReviews)

export default router
