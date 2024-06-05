import mongoose from "mongoose";

const { Schema } = mongoose;

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

//The model (based entirely on all entries in the sunSchema)
const CelestialModel = mongoose.model("CelestialModel", celestialSchema);

export default CelestialModel;
