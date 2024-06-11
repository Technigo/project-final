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
    console.log("Received request for museum ID:", museumId)

    if (!mongoose.Types.ObjectId.isValid(museumId)) {
      return res.status(400).json({ error: "Invalid museum ID" })
    }

    const museum = await Museum.findOne({ _id: museumId })

    if (!museum) {
      console.log("Museum not found for ID:", museumId)
      return res.status(404).json({ error: "Museum not found" })
    }

    console.log("Found museum for ID:", museumId)
    console.log("Museum details:", museum)

    res.status(200).json(museum)
  } catch (error) {
    console.error("Error fetching museum by ID:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
