import { SavedFavorites } from "../models/SavedFavorites.js"

export const toggleFavorite = async (req, res) => {
  const { museumId } = req.body

  if (isNaN(museumId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid museumId",
    })
  }

  let savedAsFavorite

  try {
    if (await SavedFavorites.findOne({ museumId })) {
      await SavedFavorites.deleteOne({ museumId })
      savedAsFavorite = false
    } else {
      await SavedFavorites.create({ museumId })
      savedAsFavorite = true
    }

    res.status(200).json({ success: true, savedAsFavorite })
  } catch (error) {
    res.status(400).json({
      response: error.message,
      succes: false,
      message: "Something went wrong",
      errors: error.errors || {},
    })
  }
}
