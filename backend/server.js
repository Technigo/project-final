import cloudinaryFramework from "cloudinary";
import cors from "cors";
import express from "express";
import expressListEndpoints from "express-list-endpoints";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

import { errorHandler } from "./middleware/handleError";
import productRoutes from "./routes/products";
import userRoutes from "./routes/users";
import { Product } from "./models/Product";

const port = process.env.PORT || 8080;
const app = express();

const cloudinary = cloudinaryFramework.v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // this needs to be whatever you get from cloudinary
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mockups",
    allowedFormats: ["jpg", "png", "webp"],
    transformation: [{ width: 1000, height: 1000, crop: "limit" }],
  },
});
const parser = multer({ storage });

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.send(endpoints);
});

// to upload single image to cloudinary and update Product database at the sametime.
app.post("/mockups", parser.single("image"), async (req, res) => {
  const { name } = req.body;
  const product = await Product.findOne({ templateName: name }).exec();
  product.image = req.file.path;
  await product.save();
  res.status(200).json({
    success: true,
    imageUrl: req.file.path,
    imageId: req.file.filename,
  });
});

// routes
app.use(userRoutes);
app.use(productRoutes);

// gloabl error handling
app.use((req, res, next) => {
  const err = new Error(`Cannot find endpoint: ${req.originalUrl}.`);
  err.statusCode = 404;
  next(err);
});
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
