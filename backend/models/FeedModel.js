import mongoose from "mongoose"

//Schema
const { Schema, model } = mongoose

const feedSchema = new Schema({
  message: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

//Model
const Feed = model("Feed", feedSchema)

export default Feed