import bcrypt from "bcrypt";

import mongoose from "../config/glimdatabase";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      // Checking that the email contains a @
      /^[\w.-]+@[\w.-]+\.\w{2,}$/,
      "Please provide a valid email address",
    ],
  },
  adress: {
    street: {
      type: String,
      required: true,
    },
    streetnumber: {
      type: Number,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: [
      {
        validator: function (value) {
          // Check for uppercase, lowercase, and a number
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value);
        },
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and a number",
      },
    ],
  },
  accessToken: {
    type: String,
    default: () => bcrypt.genSaltSync(),
  },
  //Stuff the user can choose in the profile and will get recommendations for
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
});

export const User = model("User", userSchema);
