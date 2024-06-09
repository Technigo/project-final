import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import expressListEndpoints from "express-list-endpoints"
import authRoutes from "./routes/authRoutes.js"
import reviewRoutes from "./routes/reviewRoutes.js"
import favoriteRoutes from "./routes/favoriteRoutes.js"
import museumRoutes from "./routes/museumRoutes.js"
import museumData from "./data/museums.json"
import { Museum } from "./models/Museum.js"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/museums"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

//Seed database
if (process.env.RESET_DB) {
  const seedDatabase = async () => {
    await Museum.deleteMany()
    //insert each document in the array into the collection
    await Museum.insertMany(museumData)
  }
  seedDatabase()
}

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 3000
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

//List endpoints
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app)
  res.json(endpoints)
})

//Routes
app.use(authRoutes)
app.use(reviewRoutes)
app.use(favoriteRoutes)
app.use(museumRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
