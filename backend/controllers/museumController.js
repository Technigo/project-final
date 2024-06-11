import { Museum } from "../models/Museum.js"
import mongoose from "mongoose"

// Get list of all museums
export const getMuseums = async (req, res) => {
  try {
    const museums = await Museum.find()
    res.status(200).json(museums)
  } catch (error) {
    console.error("Error fetching museums:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

// Get museum by ID
export const getMuseumById = async (req, res) => {
  const museumId = req.params.id

  try {
    if (!mongoose.Types.ObjectId.isValid(museumId)) {
      return res.status(400).json({ error: "Invalid museum ID" })
    }

    const museum = await Museum.findById(museumId)

    if (!museum) {
      return res.status(404).json({ error: "Museum not found" })
    }

    res.status(200).json(museum)
  } catch (error) {
    console.error("Error fetching museum by ID:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
