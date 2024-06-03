import mongoose from "mongoose"
const { Schema } = mongoose

//To add "created by" which should display the name of the user
//Also need some idenfier so you know for which museum it's written and where it should be displayed..

// Define schema
const reviewSchema = new Schema({
  museumId: {
    type: Number,
    required: true,
  },
  message: { type: String, required: true, minlength: 10, maxlength: 250 },
  createdAt: { type: Date, default: Date.now },
})

// Create model with mongoose
export const Review = mongoose.model("Review", reviewSchema)
