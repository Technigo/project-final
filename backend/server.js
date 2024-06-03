import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/flowershop";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

const Note = mongoose.model("Note", {
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
// http://localhost:8080/
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post("/notes", async (req, res) => {
  const { latitude, longitude, text } = req.body;
  const newNote = new Note({
    latitude,
    longitude,
    text,
  });
  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not save note to the database", error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
