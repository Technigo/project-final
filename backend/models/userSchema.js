import bcrypt from "bcrypt";

import mongoose from "../config/glimdatabase";

const { Schema, model } = mongoose;

const adressSchema = new Schema({
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
});

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
  adress: adressSchema,
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
});

export const User = model("User", userSchema);
