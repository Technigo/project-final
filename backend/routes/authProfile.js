import express from "express";
import passport from "../config/passport";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { upload } from "../config/multer";

const router = express.Router();
/* const upload = multer.single("profilePicture"); */

// Middleware to athenticate the token
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ error: "Token is missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token is invalid" });
    }
    req.user = user;
    next();
  });
};

// Function to generate JWT access token
const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

router.post("/users", async (req, res) => {
  console.log("POST /users called");
  const { username, password, role } = req.body;
  try {
    const newUser = new User({ username, password, role });
    await newUser.save();
    const accessToken = generateAccessToken(newUser._id);
    res.status(201).json({ id: newUser._id, accessToken });
  } catch (error) {
    console.error("Error registering user:", error);
    if (error.code === 11000) {
      res.status(400).json({ error: "Username already exists" });
    } else {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
});

router.post("/sessions", (req, res, next) => {
  console.log("Incoming login request:", req.body);

  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: info ? info.message : "Login failed" });
    }
    req.login(user, { session: false }, async (err) => {
      if (err) {
        console.log("Login error:", err);
        return res.send(err);
      }
      const token = generateAccessToken(user._id);
      return res.json({ user, token });
    });
  })(req, res, next);
});

//Update user profile
router.put(
  "/profile",
  authenticateToken,
  upload.single("profilePicture"),
  async (req, res) => {
    try {
      const { name, bio } = req.body;
      const profilePicture = req.file ? req.file.path : null;
      const updatedData = { name, bio };
      if (profilePicture) {
        updatedData.profilePicture = profilePicture;
      }
      const user = await User.findByIdAndUpdate(req.user.userId, updatedData, {
        new: true,
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to update profile" });
    }
  }
);

// Authenticated endpoint
router.get("/secrets", authenticateToken, (req, res) => {
  res.json({ secret: "This is secret content" });
});

export default router;
