import express from "express"
import { getMuseums } from "../controllers/museumController.js"

const router = express.Router()

router.get("/museums", getMuseums)

export default router
