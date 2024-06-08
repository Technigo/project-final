To put in Review schema when deployed

type: mongoose.Schema.Types.ObjectId,
ref: "Museum",

//POST reviews
app.post("/reviews", async (req, res) => {
const { museumId, message } = req.body

if (!mongoose.Types.ObjectId.isValid(museumId)) {
return res.status(400).json({
success: false,
message: "Invalid museumId",
})
}


// Define schema
const reviewSchema = new Schema({
  museumId: {
    type: Number,
    required: true,
  },
  message: { type: String, required: true, minlength: 10, maxlength: 250 },
  createdAt: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})


/////////////////ENDPOINTS FOR USER REVIEWS/////////////////
//Should be a DELETE endpoint too

//GET reviews
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }).populate('user', 'name');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

//POST reviews
app.post("/reviews", authenticateUser, async (req, res) => {
  const { museumId, message } = req.body;

  if (isNaN(museumId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid museumId",
    });
  }

  try {
    const review = await Review.create({ museumId, message, user: req.user._id });
    const populatedReview = await review.populate('user', 'name').execPopulate();

    res.status(201).json(populatedReview);
  } catch (error) {
    res.status(400).json({
      response: error.message,
      success: false,
      message: "Could not create message",
      errors: error.errors,
    });
  }
});
