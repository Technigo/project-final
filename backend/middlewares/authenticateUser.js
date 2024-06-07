import { User } from "../models/User.js"

//Authenticate user middleware
export const authenticateUser = async (req, res, next) => {
  const token = req.header("Authorization")
  const user = await User.findOne({ accessToken: token })

  if (!token) {
    return res.status(401).json({ message: "Access token is missing" })
  }

  if (!user) {
    res.status(403).json({ message: "Invalid access token" })
  }

  req.user = user
  next()
}
