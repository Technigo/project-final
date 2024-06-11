import express from "express";
import cors from "cors";
import mongoose, {Schema, model}from 'mongoose'
import expressListEndpoints from 'express-list-endpoints';
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import parkData from "./data/park.json"


dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/park-hive"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

//setup Schema
const parkSchema = new Schema({
  "nation": String,
  "name": String,
  "address": String,
  "rating": Number,
  "opening_hours": String,
  "parking_info": String,
  "location": {
    "latitude": Number,
    "longitude": Number,
  },
  "introduction": String
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    default: () => bcrypt.genSaltSync()
  }
})
//set model
const Park = mongoose.model ("Park", parkSchema)
const User = mongoose.model ("User", userSchema)

//seed the database
if(process.env.RESET_DATABASE){
  console.log("restting database")
  const seedDatabase = async() => {

    await Park.deleteMany()
    parkData.forEach(park => {
      new Park(park).save()
    })
  }
  seedDatabase()
}
// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
// http://localhost:8080/
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints)
});

app.get("/parks", async (req, res) => {
  try {
    // Check if query parameters are provided
    const nationName = req.query.nation;
    const parkName = req.query.name;
    
    if (nationName) {
      const escapedNationName = escapeRegExp(nationName);
      const nationRegex = new RegExp(escapedNationName, "i");

      const nationResult = await Park.find({ nation: nationRegex });

      if (nationResult.length > 0) {
        return res.json(nationResult);
      } else {
        return res.status(404).send("No park data was found for the specified nation.");
      }
    }

    if (parkName) {
      const escapedParkName = escapeRegExp(parkName);
      const nameRegex = new RegExp(escapedParkName, "i");

      const nameResult = await Park.find({ name: nameRegex });

      if (nameResult.length > 0) {
        return res.json(nameResult);
      } else {
        return res.status(404).send("No park data was found for the specified name.");
      }
    }

    // If no query parameters, return all parks
    const allParks = await Park.find();
    if (allParks.length > 0) {
      return res.json(allParks);
    } else {
      return res.status(404).send("No park data was found.");
    }

  } catch (err) {
    res.status(500).send("An error occurred while fetching park data.");
  }
});


app.get("/parks/:id", async (req, res) => {
  
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid park ID.");
    }

    const parkById = await Park.findById(id);
    if (parkById) {
      res.json(parkById);
    } else {
      res.status(404).send("No park data was found.");
    }
  } catch (err) {
    res.status(500).send("An error occurred while fetching park data.");
  }
})

// app.get("/parks/nation", async (req, res) => {
//   try {
//     const nationName = req.query.nation;
//     if (!nationName) {
//       return res.status(400).send("Nation name query parameter is required.");
//     }

//     const escapedNationName = escapeRegExp(nationName);
//     const regex = new RegExp(escapedNationName, "i");

//     const nationResult = await Park.find({ nation: regex });

//     if (nationResult.length > 0) {
//       res.json(nationResult);
//     } else {
//       res.status(404).send("No park data was found.");
//     }
//   } catch (err) {
//     res.status(500).send("An error occurred while fetching park data.");
//   }
// });

// app.get("/name", async (req, res) => {
//   try {
//     const parkName = req.query.name;
//     // const escapeParkName = escapeRegExp(parkName);
//     const regex = new RegExp(parkName, "i");
//     const nameResult = await Park.find({ nation: regex });

//     if (nameResult) {
//       res.json(nameResult);
//     } else {
//       res.status(404).send("no park data was found.");
//     }
//   } catch (err) {
//     res.status(500).send("An error occurred while fetching park data.");
//   }
// });

//auth
app.post("/register", (req,res) => {
  try{
    const {name, email, password} = req.body
    const salt = bcrypt.genSaltSync()
    const user = new User({
      name, 
      email,
      password:bcrypt.hashSync(password, salt)
    })
    user.save()
    res
      .status(201)
      .json({ 
        success: true,
        message: "User created",
        id: user._id,
        accessToken: user.accessToken
      });
  } catch (err) {
    res.redirect("/register")
    res.status(400).json({
      message: "Could not create user.",
      errors: err.errors,
    });
  }
})

app.post("/login", async (req, res) => {
  const matchUser = await User.findOne({
    email: req.body.email,
  });
  if (matchUser && bcrypt.compareSync(req.body.password, matchUser.password)) {
    res.json({
      message: "User logged in.",
      matchUserId: matchUser._id,
      token: matchUser.token,
    });
  } else {
    res.redirect("/register")
    res.json({ message: "User not found." });
  }
});

const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({
    token: req.header("Authorization"),
  });
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({
      message: "failed.",
    });
  }
};

app.get("/secrets", authenticateUser);
app.get("/secrets", (req, res) => {
  res.json({
    secret: "This is secrets.",
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
