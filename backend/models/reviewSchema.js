import mongoose from "../config/glimdatabase";

const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 2,
  },
  message: {
    type: String,
    required: true,
    minlength: 5,
  },
  productID: {
    type: String,
    required: true,
    immutable: true,
  },
  userID: {
    type: String,
    required: true,
    immutable: true,
  },
  reviewScore: {
    type: Number,
    required: true,
  },
});

export const Review = model("Review", reviewSchema);
