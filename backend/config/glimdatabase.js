import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/glim";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

export default mongoose;
