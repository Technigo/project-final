import mongoose from "mongoose";

const planetSchema = new Schema({
    name: String,
    moons: Number,
    density: Number,
    
  });