import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-final";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

export default mongoose;
