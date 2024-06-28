import mongoose from "mongoose";

const { Schema } = mongoose;

const rentalSchema = new Schema({
  name: String,
  image: String,
  description: String,
  price: String,
});

const Rental = mongoose.model("Rental", rentalSchema);

export default Rental;
