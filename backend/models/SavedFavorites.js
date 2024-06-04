import mongoose from "mongoose";
const { Schema } = mongoose;

const savedFavoritesSchema = new Schema({
  museumId: {
    type: Number,
    required: true,
  },
});

export const SavedFavorites = mongoose.model(
  "SavedFavorites",
  savedFavoritesSchema
);
