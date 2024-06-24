import { application } from "express";
import { SavedFavorites } from "../models/SavedFavorites.js";
import { User } from "../models/User.js";
import { Museum } from "../models/Museum.js";

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

export const likedMuseums = async (req, res) => {
  const { accessToken } = req.body;

  try {
    const user = await User.findOne({ accessToken });
    const likedMuseumsForUser = await SavedFavorites.find({ userId: user.id });
    const likedMuseumsWithMuseumInfo = await Promise.all(
      likedMuseumsForUser.map(async (likedMuseum) => {
        const museumInfo = await Museum.findOne({
          id: likedMuseum.museumId,
        });
        return {
          museumId: likedMuseum.museumId,
          userId: likedMuseum.userId,
          museum: {
            name: museumInfo.name,
            theme: museumInfo.theme,
            description: museumInfo.description,
            location: museumInfo.location,
            lat: museumInfo.lat,
            lon: museumInfo.lon,
            ticket_price: museumInfo.ticket_price,
            has_cafe: museumInfo.has_cafe,
            website: museumInfo.website,
            opening_hours: museumInfo.opening_hours,
            id: museumInfo.id,
            url: museumInfo.url,
          },
        };
      })
    );
    res
      .status(200)
      .json({ success: true, likedMuseums: likedMuseumsWithMuseumInfo ?? [] });
  } catch (error) {
    res.status(400).json({
      response: error.message,
      succes: false,
      message: "Something went wrong",
      error: error.errors || {},
    });
  }
};

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
