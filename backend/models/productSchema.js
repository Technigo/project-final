import mongoose from "../config/glimdatabase";

const { Schema, model } = mongoose;

const allergyEnum = [
  "fragrances",
  "preservatives",
  "dyes",
  "metals",
  "latex",
  "parabens",
];

const prosEnum = ["organic", "vegan", "crueltyfree"];

const skinEnum = ["dry", "oily", "combination", "sensitive", "acne"];

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  brand: String,
  category: String,
  subcategory: String,
  description: String,
  price: Number,
  //Talk about if we want boolean or an array and decide before we do the remote database
  allergies: {
    type: [{ type: String, enum: allergyEnum }],
    default: [], // Default to an empty array for users with no allergies
  },
  pros: {
    type: [{ type: String, enum: prosEnum }],
    default: [], // Default to an empty array for users with no allergies
  },
  hair: {
    moisture: String,
    shape: String,
  },
  skin: {
    type: [{ type: String, enum: skinEnum }],
    default: [], // Default to an empty array for users with no allergies},
  },
  instructions: String,
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
