import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import expressListEndpoints from "express-list-endpoints";
import { User } from "./models/User";
import { Review } from "./models/Review";
import { SavedFavorites } from "./models/SavedFavorites";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/museums";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

//Mongoose model

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 3000;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

//Authenticate user middleware
const authenticateUser = async (req, res, next) => {
  const token = req.header("Authorization");
  const user = await User.findOne({ accessToken: token });

  if (!token) {
    return res.status(401).json({ message: "Access token is missing" });
  }

  if (!user) {
    res.status(403).json({ message: "Invalid access token" });
  }

  req.user = user;
  next();
};

//List endpoints
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints);
});

/////////////////ENDPOINTS FOR AUTHENTICATION/////////////////
// Enpoint to register user
app.post("/users", async (req, res) => {
  const salt = bcrypt.genSaltSync(10);

  try {
    const { name, email, password } = req.body;

    if (name === "" || email === "" || password === "") {
      res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    await user.save();

    return res
      .status(201)
      .json({ id: user._id, accessToken: user.accessToken });
  } catch (error) {
    res.status(400).json({
      response: error.message,
      success: false,
      message: "Could not create user",
      errors: error.errors,
    });
  }
});

// Endpoint for userpage when user is logged in
app.get("/user-page", authenticateUser, (req, res) => {
  res.json({ message: "You are logged in!", user: req.user });
});

// Endpoint to log in
app.post("/sessions", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() });
  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ userId: user._id, accessToken: user.accessToken });
  } else if (user && !bcrypt.compareSync(password, user.password)) {
    // Wrong password
    res.status(400).json({});
  } else {
    // User does not exist
    res.status(404).json({});
  }
});

/////////////////ENDPOINTS FOR USER REVIEWS/////////////////
//Should be a DELETE endpoint too

//GET reviews
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

//POST reviews
app.post("/reviews", async (req, res) => {
  const { museumId, message } = req.body;

  if (isNaN(museumId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid museumId",
    });
  }

  try {
    const review = await Review.create({ museumId, message });
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({
      response: error.message,
      success: false,
      message: "Could not create message",
      errors: error.errors,
    });
  }
});

/////////////////ENDPOINTS FOR FAVORITES/////////////////

// endpoint to save/remove a museum as favorite (post)
app.post("/favorites", async (req, res) => {
  const { museumId } = req.body;

  if (isNaN(museumId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid museumId",
    });
  }

  let savedAsFavorite;

  try {
    if (await SavedFavorites.findOne({ museumId })) {
      await SavedFavorites.deleteOne({ museumId });
      savedAsFavorite = false;
    } else {
      await SavedFavorites.create({ museumId });
      savedAsFavorite = true;
    }

    res.status(200).json({ success: true, savedAsFavorite });
  } catch (error) {
    res.status(400).json({
      response: error.message,
      succes: false,
      message: "Something went wrong",
      errors: error.errors || {},
    });
  }
});

// endpoint to lookup a museum to see if its favorite (get)

// endpoint to get all favorites for a user  --- TODO?

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
