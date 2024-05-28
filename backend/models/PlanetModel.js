import mongoose from "mongoose";
import planetsData from "../data/planets.json";

const { Schema } = mongoose;

const planetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  moons: {
    type: Number,
    required: true,
  },
  asteroids: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  surfaceTemperature: {
    type: Schema.Types.Mixed, // Allows for both Number and Object types
    required: true,
  },
  weatherClimate: {
    type: String,
    required: true,
  },
  travelTime: {
    type: String,
    required: true,
  },
  curiosa: [
    {
      type: String,
      required: true,
    },
  ],
});

//The model (based entirely on all entries in the planetSchema)
const PlanetModel = mongoose.model("PlanetModel", planetSchema);

//Seed the database
if (process.env.RESET_DATABASE) {
  const seedDatabase = async () => {
    await PlanetModel.deleteMany();

    planetsData.forEach((planet) => {
      new PlanetModel(planet).save();
    });
  };
  seedDatabase();
}

export default PlanetModel;
