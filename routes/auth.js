const express = require("express")
const { registerUser, loginUser, changePassword  } = require("../controllers/auth")
const authMiddleware = require("../middleware/auth")

const router = express.Router()

//all routes are related to authentication & authorization
router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/forgot-password", authMiddleware, changePassword)

module.exports= router