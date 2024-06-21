import express from "express";
import { parser } from "../config/cloudinary.js";
import { uploadMockup } from "../controllers/mockupController.js";

const router = express.Router();
router.post("/mockups", parser.single("image"), uploadMockup);

export default router;
