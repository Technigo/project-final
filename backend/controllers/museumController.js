import { Museum } from "../models/Museum.js"

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
