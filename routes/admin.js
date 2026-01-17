const express = require("express")
const authMiddleware = require("../middleware/auth")
const adminMiddleware = require("../middleware/admin")
const router = express.Router()

router.get("/welcome", authMiddleware, adminMiddleware, (req, res) =>{
  const {username, userId, role} = req.userInfo;
  res.status(200).json({
    success: true,
    message: "Welcome to our admin page",
    user:{
      _id: userId,
      username: username,
      role: role
    }
  })
})

module.exports = router