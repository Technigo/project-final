import { Museum } from "../models/Museum.js";
import { Review } from "../models/Review.js";
import { User } from "../models/User.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// getReviewsForUser

export const getReviewsForUser = async (req, res) => {
  const { accessToken } = req.body;

  try {
    const user = await User.findOne({ accessToken });
    const userReviews = await Review.find({
      userId: user.id,
    });
    const userReviewsWhitMuseumsName = await Promise.all(
      userReviews.map(async (review) => {
        const museumInfo = await Museum.findOne({
          id: review.museumId,
        });
        return {
          museumId: review.museumId,
          createdAt: review.createdAt,
          userId: review.userId,
          userName: review.userName,
          message: review.message,
          museumName: museumInfo.name,
        };
      })
    );
    res.status(200).json(userReviewsWhitMuseumsName);
  } catch (error) {
    res.status(400).json({
      response: error.message,
      success: false,
      message: "Could not get user reviews",
      errors: error.errors,
    });
  }
};

export const postReviews = async (req, res) => {
  const { museumId, message, accessToken } = req.body;

  if (isNaN(museumId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid museumId",
    });
  }

  try {
    const user = await User.findOne({ accessToken });
    const review = await Review.create({
      museumId,
      message,
      userId: user.id,
      userName: user.name,
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({
      response: error.message,
      success: false,
      message: "Could not create message",
      errors: error.errors,
    });
  }
};

export const deleteReviews = async (req, res) => {
  const reviewId = req.params.id;

  try {
    const review = await Review.findByIdAndDelete(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
