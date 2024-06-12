import cors from "cors";
import express from "express";

//Import from seeding so that is runs
import seedDatabase from "./config/seeddatabase";
import documentationRoutes from "./routes/documentation";
import productsRoutes from "./routes/products";
import reviewRoutes from "./routes/reviews";
import stripeRoutes from "./routes/stripe"
import userRoutes from "./routes/users";

const app = express();

// Add middlewares to enable cors and json body parsing
//TODO Add CORS Link
app.use(cors());
app.use(express.json());
app.use("/", documentationRoutes);
app.use("/products", productsRoutes);
app.use("/users", userRoutes);
app.use("/reviews", reviewRoutes);
app.use("/stripe", stripeRoutes)

export default app;
