import express from "express";

import { Review } from "../models/reviewSchema";

const router = express.Router();

//Review Endpoints

//Endpoint to show the reviews for the products
router.get("/:reviewedProductId", async (req, res) => {
  try {
    const { reviewedProductId } = req.params;
    const reviewedProduct = await Review.find({
      productID: reviewedProductId,
    }).exec();
    if (reviewedProduct) {
      res.status(200).json({
        reviewedProduct: reviewedProduct,
        message: "The Reviews were found.",
      });
    } else {
      res.status(404).json({
        message: "Sorry, there is no product with that search criteria.",
      });
    }
  } catch (error) {
    console.error("The followind error occured:", error);
    res.status(500).json({
      message:
        "Sorry, this page is not available at the moment. Please try again later.",
    });
  }
});

//Endpoint to show the reviews for the userprofile
router.get("/:reviewedUserId", async (req, res) => {
  try {
    const { reviewedUserId } = req.params;
    const reviewedProduct = await Review.find({
      userID: reviewedUserId,
    }).exec();
    if (reviewedProduct) {
      res.status(200).json({
        reviewedProduct: reviewedProduct,
        message: "The Reviews were found.",
      });
    } else {
      res.status(404).json({
        message: "Sorry, there is no product with that search criteria.",
      });
    }
  } catch (error) {
    console.error("The followind error occured:", error);
    res.status(500).json({
      message:
        "Sorry, this page is not available at the moment. Please try again later.",
    });
  }
});

export default router;
