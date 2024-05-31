import express from "express";

import { authenticateUser } from "../middlewares/authenticateUser";
import { Review } from "../models/reviewSchema";

const router = express.Router();

//Review Endpoints

//POST a new Review
router.post("/", authenticateUser);
router.post("/", async (req, res) => {
  const {
    firstname,
    message,
    productID,
    userID,
    userSkinType,
    userHairType,
    reviewScore,
  } = req.body;
  try {
    const review = await new Review({
      firstname: firstname,
      message: message,
      productID: productID,
      userID: userID,
      userSkinType: userSkinType,
      userHairType: userHairType,
      reviewScore: reviewScore,
    })
      .save()
      .exec();
    res.status(201).json({
      review: review,
      message: "A new review was created.",
    });
  } catch (error) {
    res.status(400).json({ message: "Couldn't create a new review." });
  }
});

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
//User has to be logged in to see it
router.get("/:reviewedUserId", authenticateUser);
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
