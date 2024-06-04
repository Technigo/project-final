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