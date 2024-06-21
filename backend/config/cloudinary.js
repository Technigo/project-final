import dotenv from "dotenv";
import cloudinaryFramework from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

dotenv.config();

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

export const parser = multer({ storage });
