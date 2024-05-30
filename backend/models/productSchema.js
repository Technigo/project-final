import mongoose from "../config/glimdatabase";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: String,
  brand: String,
  category: String,
  subcategory: String,
  description: String,
  price: String,
  //Talk about if we want boolean or an array and decide before we do the remote database
  allergies: {
    /*  const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allergyEnum = [
  'fragrances',
  'preservatives',
  'dyes',
  'metals',
  'latex',
  'parabens',
];

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  allergies: {
    type: [{ type: String, enum: allergyEnum }],
    default: [], // Default to an empty array for users with no allergies
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
    [{type: String, enum [addthearray]}]
    default: [] */
    fragrances: Boolean,
    preservatives: Boolean,
    dyes: Boolean,
    metals: Boolean,
    latex: Boolean,
    parabens: Boolean,
  },
  pros: {
    organic: Boolean,
    vegan: Boolean,
    crueltyfree: Boolean,
  },
  recommendedfor: {
    hair: {
      frizzy: Boolean,
      oily: Boolean,
      dry: Boolean,
      straight: Boolean,
      curly: Boolean,
    },
    skin: {
      dry: Boolean,
      oily: Boolean,
      combination: Boolean,
      sensitive: Boolean,
      acne: Boolean,
    },
  },
  instructions: String,
  review: Number,
  size: String,
  image: {
    //According to online information cloudinary will give us this two things.
    publicId: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

export const Product = model("Product", productSchema);
