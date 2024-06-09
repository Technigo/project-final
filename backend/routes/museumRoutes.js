import express from "express"
import { Museum } from "../models/Museum.js"

const router = express.Router()

router.get("/museums", async (req, res) => {
  try {
    const museums = await Museum.find()
    res.status(200).json(museums)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
