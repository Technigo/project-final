import mongoose from "mongoose";

//Schema
const { Schema, model } = mongoose;

const spaceFeedSchema = new Schema({
  message: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140,
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Model
const SpaceFeed = model("SpaceFeed", spaceFeedSchema);

export default SpaceFeed;
