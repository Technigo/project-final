import express from "express";
import passport from "../config/passport";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { upload } from "../config/multer";
/* import { authenticate } from "passport"; */

const router = express.Router();

// Middleware to athenticate the token
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log("Authorization header:", authHeader);
  console.log("Token:", token);

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
  try {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};

router.post("/users", async (req, res) => {
  console.log("POST /users called");
  const { username, password, role } = req.body;

  // Check if the password meets the minimum length requirement
  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters long" });
  }

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
      console.log("Error during authentication:", err);
      return res
        .status(400)
        .json({ error: info ? info.message : "Login failed" });
    }
    req.login(user, { session: false }, async (err) => {
      if (err) {
        console.log("Login error:", err);
        return res.send(err);
      }
      console.log("Login successful:", user.username);
      return res.json({ user, token });
    });
  })(req, res, next);
});

// Route to fetch profile
router.get("/profile", authenticateToken, async (req, res) => {
  console.log("GET /profile called");
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
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
