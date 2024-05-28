import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import dotenv from "dotenv"
import expressListEndpoints from "express-list-endpoints"

//.env
dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-solar-system"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

// Defines the port the app will run on.
const port = process.env.PORT || 8080;
const app = express();

// Middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Route handler
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app)
  res.json(endpoints)
})


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});