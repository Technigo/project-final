import mongoose from "mongoose";
const { Schema } = mongoose;

const savedFavoritesSchema = new Schema({
  museumId: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

export const SavedFavorites = mongoose.model(
  "SavedFavorites",
  savedFavoritesSchema
);
