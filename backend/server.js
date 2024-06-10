import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt-nodejs";
import expressListEndpoints from "express-list-endpoints";
import roomsData from "./data/hotel-room.json";
import roomStatusData from "./data/room-status.json";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/flowershop";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

// User model
const User = mongoose.model("User", {
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

// Hotelroom model
const Hotelrooms = mongoose.model("Hotelrooms", {
  id: Number,
  type: String,
  price: String,
  size: String,
  capacity: Number,
  numbers_of_rooms: Number,
  description: String,
  image: String,
  facilities: [String],
});

// Room status model
const RoomStatus = mongoose.model("Roomstatus", {
  roomId: Number,
  date: Date,
  status: Number,
});

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Middleware to authenticate user with access token
const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  if (!accessToken) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Access token is missing" });
  }

  const user = await User.findOne({ accessToken });
  if (!user) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Access token is invalid" });
  }

  req.user = user;
  next();
};

if (+process.env.RESET_DB) {
  const seedDatabase = async () => {
    try {
      await Hotelrooms.deleteMany({});
      await RoomStatus.deleteMany({});
      console.log("Database cleared");
      const saveRoomPromises = roomsData.map((room) =>
        new Hotelrooms(room).save()
      );
      const saveStatusPromises = roomStatusData.map((status) =>
        new RoomStatus(status).save()
      );

      await Promise.all(saveRoomPromises, saveStatusPromises);
      console.log("Database seeded with initial data");
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  };

  // const createRoomStatusArray = async() => {
  //   function generateDateArray(startDateStr, endDateStr) {
  //     const startDate = new Date(startDateStr);
  //     const endDate = new Date(endDateStr);
  //     const dateArray = [];

  //     for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
  //         dateArray.push(new Date(date));  // Ensure each date is a new instance
  //     }

  //     return dateArray;
  //   }

  //   // Generate dates from 2024-06-01 to 2025-06-01
  //   const startDate = "2024-06-05";
  //   const endDate = "2025-06-05";
  //   const dates = generateDateArray(startDate, endDate);

  //   // Array to hold the room and date combinations
  //   const roomDateArray = [];

  //   // Loop over roomIds
  //   for (let roomId = 1; roomId <= 7; roomId++) {
  //       // Loop over dates
  //       for (let date of dates) {
  //           roomDateArray.push({ roomId: roomId, date: new Date(date), status: 1 });
  //       }
  //   }

  //   const fs = require('fs');

  //   // Convert roomDateArray to a JSON string
  //   const jsonContent = JSON.stringify(roomDateArray, null, 2);

  //   // Write JSON string to a file
  //   fs.writeFile('data/room-status.json', jsonContent, (err) => {
  //       if (err) {
  //           console.error('Error writing file:', err);
  //       } else {
  //           console.log('File has been saved.');
  //       }
  //   });
  // }

  // createRoomStatusArray();

  seedDatabase();
}

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    res.status(503).json({ error: "Service unavailable" });
  }
});

// Start defining your routes here
// http://localhost:8080/
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints);
});

app.get("/hotelrooms", async (req, res) => {
  try {
    const hotelrooms = await Hotelrooms.find();
    res.json(hotelrooms);
  } catch (error) {
    res.status(400).send("Rooms cannot be found.");
  }
});

app.get("/hotelrooms/:guestamount", async (req, res) => {
  try {
    const amount = parseInt(req.params.guestamount);
    const suitableRooms = await Hotelrooms.find({ capacity: { $gte: amount } });

    if (suitableRooms.length > 0) {
      res.json(suitableRooms);
    } else {
      return res.status(404).json({ error: "No rooms found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// This endpoint is used to get room status on the given date
app.get("/hotelrooms/status/date/:date", async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const availableRooms = await RoomStatus.find({
      $and: [
        { date: { $eq: date } },
        //{"status": { $eq: 1 }}
      ],
    });

    if (availableRooms.length > 0) {
      res.json(availableRooms);
    } else {
      res.status(404).json({ error: "No rooms found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to get room status based on the date and guest amounts
app.get("/hotelrooms/booking/date/:date/guestamount/:guestamount", async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const guest = parseInt(req.params.guestamount);

    const rooms = await Hotelrooms.find({ capacity: { $gte: guest } });
    console.log("Found rooms with sufficient capacity:", rooms);

    const roomIds = rooms.map(room => room.id);
    const availableRooms = await RoomStatus.find({
      $and: [
        {roomId: { $in: roomIds }},
        {date: { $eq: date } },
        {status: { $eq: 1 }}
      ]
    });

    if (availableRooms.length > 0) {
      const Roomsdata = availableRooms.map(status => {
        const room = rooms.find(r => r.id === status.roomId);
        return {
          ...room._doc,
          status: status.status,
          date: status.date
        };
      });
      res.json(Roomsdata);
    } else {
      res.status(404).json({ error: "No rooms foundd" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Registration endpoint to create a new user
app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate the input
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password);

    // Create new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ id: user._id, accessToken: user.accessToken });
  } catch (err) {
    console.error("User creation failed:", err);

    if (err.name === "ValidationError") {
      return res
        .status(400)
        .json({ error: "Validation error", details: err.message });
    } else if (err.code === 11000) {
      return res.status(400).json({
        error: "Duplicate key error",
        details: "Email or name already exists",
      });
    } else {
      return res
        .status(500)
        .json({ error: "Internal server error", details: err.message });
    }
  }
});

// Login endpoint to authenticate a user
// Find the user by email, if user is found and password is correct, generate and return an access token
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const accessToken = user.accessToken;
  res.status(200).json({ accessToken });
});

// Fetch user details, including user ID (needed to delete user)
app.get("/user-details", authenticateUser, async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("name email");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      message: `Hi ${user.name}, welcome!`,
      user: {
        _id: user._id, 
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete user endpoint
app.delete("/users/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});