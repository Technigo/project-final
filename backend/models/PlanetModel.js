import mongoose from "mongoose";
import { planetSchema } from "../schema/PlanetSchema";

const PlanetModel = mongoose.model("PlanetModel", planetSchema)