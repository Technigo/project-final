import express from "express"
import { getMuseums, getMuseumById } from "../controllers/museumController.js"

const router = express.Router()

router.get("/museums", getMuseums)
router.get("/museums/:id", getMuseumById)

export default router
