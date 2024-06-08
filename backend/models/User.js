import mongoose from "mongoose";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

// Define schema
const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => bcrypt.genSaltSync(),
  },
});

// Create model with mongoose
export const User = mongoose.model("User", userSchema);
