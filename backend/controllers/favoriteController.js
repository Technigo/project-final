import { application } from "express";
import { SavedFavorites } from "../models/SavedFavorites.js";
import { User } from "../models/User.js";

export const toggleFavorite = async (req, res) => {
  const { museumId, accessToken } = req.body;

  if (isNaN(museumId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid museumId",
    });
  }

  let savedAsFavorite;

  try {
    const user = await User.findOne({ accessToken });
    if (await SavedFavorites.findOne({ museumId, userId: user.id })) {
      await SavedFavorites.deleteOne({ museumId, userId: user.id });
      savedAsFavorite = false;
    } else {
      await SavedFavorites.create({ museumId, userId: user.id });
      savedAsFavorite = true;
    }

    res.status(200).json({ success: true, savedAsFavorite });
  } catch (error) {
    res.status(400).json({
      response: error.message,
      succes: false,
      message: "Something went wrong",
      errors: error.errors || {},
    });
  }
};

// getLikedMuseumsForUser

export const isMuseumLiked = async (req, res) => {
  const museumId = req.params.museumId;
  const { accessToken } = req.body;

  try {
    const user = await User.findOne({ accessToken });
    const savedAsFavorite =
      (await SavedFavorites.findOne({ museumId, userId: user.id })) != null;
    res.status(200).json({ success: true, savedAsFavorite });
  } catch (error) {
    res.status(400).json({
      response: error.message,
      succes: false,
      message: "Something went wrong",
      error: error.errors || {},
    });
  }
};
