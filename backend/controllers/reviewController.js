import { Review } from "../models/Review.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// getReviewsForUser

export const postReviews = async (req, res) => {
  const { museumId, message } = req.body;

  if (isNaN(museumId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid museumId",
    });
  }

  try {
    const review = await Review.create({ museumId, message });
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

// endpoint to lookup a museum to see if its favorite (get)

// endpoint to get all favorites for a user  --- TODO?
