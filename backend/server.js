import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expressListEndpoints from "express-list-endpoints";
import PlanetModel from "./models/PlanetModel";

//.env
dotenv.config();

const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost/project-solar-system";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

// Defines the port the app will run on.
const port = process.env.PORT || 8080;
const app = express();

// Middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Route handler
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints);
});

// GET planets
app.get("/planets", async (req, res) => {
  const allPlanets = await PlanetModel.find();

  if (allPlanets.length > 0) {
    res.json(allPlanets);
  } else {
    res.status(404).send("No planets can be found at the moment.");
  }
});

// GET a specific planet
app.get("/planets/:planet", async (req, res) => {
  const planet = req.params.planet;

  const onePlanet = await PlanetModel.find({
    name: { $regex: planet, $options: "i" },
  }).exec();

  if (onePlanet) {
    res.json(onePlanet);
  } else {
    res
      .status(404)
      .send(
        "Couldn't find the specific planet you're looking for. Please try again"
      );
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
