import express from "express";

import User from "../models/userSchema";

const router = express.Router();

//User Endpoints

router.post("/register", async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      address,
      password,
      allergies,
      pros,
      recommendedfor,
    } = req.body;

    if (!firstname) {
      return res.status(400).json({ message: "Firstname is required." });
    }

    if (firstname.length < 2) {
      return res
        .status(400)
        .json({ message: "Firstname must be at least 2 characters long." });
    }

    if (!lastname) {
      return res.status(400).json({ message: "Lastname is required." });
    }

    if (lastname.length < 2) {
      return res
        .status(400)
        .json({ message: "Lastname must be at least 2 characters long." });
    }

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    if (!address.street) {
      return res.status(400).json({ message: "Streetname is required." });
    }

    if (!address.city) {
      return res.status(400).json({ message: "City is required." });
    }

    if (!address.postalCode) {
      return res.status(400).json({ message: "Postalcode is required." });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required." });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 2 characters long." });
    }

    //Create a new user
    const user = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      address: address,
      password: bcrypt.hashSync(password, 10),
      allergies: allergies,
      pros: pros,
      recommendedfor: recommendedfor,
    });
    await user.save().exec();
    res.status(201).json({
      message: `Your Registration was successfull ${user.firstname}. Please log in now.`,
      id: user._id,
      accessToken: user.accessToken,
    });
  } catch (error) {
    res.status(400).json({ message: "Could not register user." });
  }
});

export default router;
