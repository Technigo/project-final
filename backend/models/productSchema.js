import mongoose from "../config/glimdatabase";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: String,
  brand: String,
  category: String,
  subcategory: String,
  description: String,
  price: String,
  allergies: {
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
