import bcrypt from "bcrypt";
import express from "express";

import { authenticateUser } from "../middlewares/authenticateUser";
import { User } from "../models/userSchema";

const router = express.Router();

//User Endpoints

router.post("/register", async (req, res) => {
  try {
    console.log(firstname);
    const {
      firstname,
      lastname,
      email,
      address,
      password,
      allergies,
      pros,
      hair,
      skin,
    } = req.body;
    console.log(
      firstname,
      lastname,
      email,
      address,
      password,
      allergies,
      pros,
      hair,
      skin
    );

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
        .json({ message: "Password must be at least 8 characters long." });
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
      hair: hair,
      skin: skin,
    });
    await user.save();
    res.status(201).json({
      message: `Your Registration was successfull ${user.firstname}. Please log in now.`,
      id: user._id,
      accessToken: user.accessToken,
    });
  } catch (error) {
    console.error("Register Endpoint", error);
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
          // Do we need to add all of the user data back to the frontend?
          firstname: user.firstname,
          lastName: user.lastname,
          email: user.email,
          address: user.address,
          allergies: user.allergies,
          pros: user.pros,
          hair: user.hair,
          skinType: user.skin,
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
    console.error("Login Endpoint", error);
    res.status(500).json({
      message: "Somethings wrong with the sign in. Please try again later.",
    });
  }
});

router.get("/profile/:userId", authenticateUser);
router.get("/profile/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ _id: userId }).exec();

    if (user) {
      res.status(200).json({
        user: user,
        message: "Success in finding the user profile.",
      });
    } else {
      res.status(404).json({
        message: "Sorry, there is no user with that ID.",
      });
    }
  } catch (error) {
    console.error("Get user endpoint:", error);
    res.status(500).json({
      message:
        "Sorry, this page is not available at the moment. Please try again later.",
    });
  }
});

router.patch("/profile/:userId", authenticateUser);
router.patch("/profile/:userId", async (req, res) => {
  try {
    const updatedFields = req.body;
    const { userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedFields },
      { new: true, runValidators: true }
    );

    if (updatedUser) {
      res
        .status(200)
        .json({ updatedUser: updatedUser, message: "User was updated" });
    } else {
      res.status(404).json({ message: "There is no User with that ID." });
    }
  } catch (error) {
    console.error("Profile Endpoint Update", error);
    res.status(500).json({
      message: "Failed to update user.",
    });
  }
});

router.delete("/profile/:userId", authenticateUser);
router.delete("/profile/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(200).json({ message: "User was successfully deleted." });
    } else {
      res.status(404).json({ message: "There is no user with that ID." });
    }
  } catch (error) {
    console.error("Profile Endpoint Delete", error);
    res.status(500).json({
      message: "Failed to delete user.",
    });
  }
});

export default router;
