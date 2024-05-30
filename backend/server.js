import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authProfileRoutes from "./routes/authProfile";
import passport from "./config/passport";
import expressListEndpoints from "express-list-endpoints";

dotenv.config();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-final";
mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;

const port = process.env.PORT || 9000;
const app = express();

// Middleware to log every incoming request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use("/api", authProfileRoutes);

// Start defining your routes here
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
