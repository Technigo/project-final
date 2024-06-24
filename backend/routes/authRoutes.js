import express from "express"
import {
  registerUser,
  loginUser,
  getUserPage,
} from "../controllers/authController.js"
import { authenticateUser } from "../middlewares/authenticateUser.js"

const router = express.Router()

router.post("/users", registerUser)
router.post("/sessions", loginUser)
router.get("/user-page", authenticateUser, getUserPage)

export default router