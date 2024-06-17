import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import expressListEndpoints from "express-list-endpoints";
import mongoose from "mongoose";

import passport from "./config/passport";
import authProfileRoutes from "./routes/authProfile";

dotenv.config();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-final";
mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;

const port = process.env.PORT || 9000;
const app = express();

// middlewares to enable cors and json body parsing
const corsOptions = {
  origin: "http://localhost:5173",/* https://adhd-connect.netlify.app" */
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(passport.initialize());

app.use("/api", authProfileRoutes);

app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
