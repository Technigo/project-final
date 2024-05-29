import express from "express";

import { User } from "../models/userSchema";
import { authenticateUser } from "../middlewares/authenticateUser";

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

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        res.status(202).json({
          message: `You are logged in ${user.firstname}.`,
          id: user._id,
          accessToken: user.accessToken,
        });
      } else {
        res.status(401).json({ message: "This password is incorrect." });
      }
    } else {
      res.status(404).json({
        message:
          "We didn't find an account with that email. Please check your spelling.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Somethings wrong with the sign in. Please try again later.",
    });
  }
});

router.get("/profile", authenticateUser);
router.get("/profile", (req, res) => {
  res
    .status(200)
    .json({ message: "This is a test. We have to put the user profile here." });
});
export default router;
