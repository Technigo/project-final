import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import dotenv from "dotenv"
import SpaceFeed from "./models/SpaceFeedModel"
import expressListEndpoints from "express-list-endpoints"

//Load environment variables
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

// Route handler for the root
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app)
  res.json(endpoints)
})

//Route handler to show space messages in descending order from when created, limit to 10 messages
app.get("/space-feed", async (req, res) => {
  const spaceFeed = await SpaceFeed.find()
  .sort({ createdAt: "desc" })
  .limit(10)
  .exec()

  try {
    res.status(201).json({
      success: true,
      response: spaceFeed,
      message: "Space messages successfully retrieved",
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Could not retrieve any space messages",
    })
  }
})

//Route handler to post messages in space feed
app.post("/space-feed", async (req, res) => {
  const { message } = req.body //Retrieve users message to our API endpoint

  //Use the mongoose model to create the database entry
  const spaceFeed = new SpaceFeed({ message })

  try {
    const newSpaceFeed = await spaceFeed.save()
    res.status(201).json({
      success: true,
      response: newSpaceFeed,
      message: "Space message was successfully posted",
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Could not post space message",
    })
  }
})

//Route handler to like space messages
app.post("/space-feed/:messageId/like", async (req, res) => {
  const { messageId } = req.params

  try {
    const likeMessage = await SpaceFeed.findByIdAndUpdate(
      messageId,
      { $inc: { likes: 1 } },
      { new: true, runValidators: true }
    )
    res.status(200).json({
      sucess: true,
      response: likeMessage,
      message: "Space message was successfully liked",
    })
  } catch (error) {
    res.status(400).json({
      sucess: false,
      response: error,
      message: "Could not like space message",
    })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})