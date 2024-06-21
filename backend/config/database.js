import mongoose from "mongoose";

export const connectMongoDB = () => {
  const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-final";
  mongoose.connect(mongoUrl);
  mongoose.Promise = Promise;
};
