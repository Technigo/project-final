import mongoose from "mongoose";
const { Schema } = mongoose;

//To add "created by" which should display the name of the user

// Define schema
const reviewSchema = new Schema({
  museumId: {
    type: Number,
    required: true,
  },
  message: { type: String, required: true, minlength: 10, maxlength: 250 },
  createdAt: { type: Date, default: Date.now },
  userId: { type: String, required: true },
  userName: { type: String, required: true },
});

// Create model with mongoose
export const Review = mongoose.model("Review", reviewSchema);
