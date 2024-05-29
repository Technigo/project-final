import cors from "cors";
import express from "express";

import documentationRoutes from "./routes/documentation";

const app = express();

// Add middlewares to enable cors and json body parsing
//TODO Add CORS Link
app.use(cors());
app.use(express.json());
app.use("/", documentationRoutes);

export default app;
