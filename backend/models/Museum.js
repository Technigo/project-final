import mongoose from "mongoose"

const { Schema } = mongoose

// Define schema
const museumSchema = new Schema({
  name: { type: String, required: true },
  theme: { type: String },
  description: { type: String },
  location: { type: String },
  lat: { type: String },
  lon: { type: String },
  ticket_price: { type: String },
  has_cafe: { type: Boolean },
  website: { type: String },
  opening_hours: [{ type: Schema.Types.Mixed }],
  id: { type: Number },
  url: { type: String },
  category: { type: String },
})

// Create model with mongoose
export const Museum = mongoose.model("Museum", museumSchema)
