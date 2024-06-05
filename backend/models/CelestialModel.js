import mongoose from "mongoose";

const { Schema, model } = mongoose;

const celestialSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fact: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
  additional_info: {
    type: String,
    required: true,
  },
});

const CelestialModel = model("CelestialModel", celestialSchema);

export default CelestialModel;
