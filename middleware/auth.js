const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
  //check if user have a token
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided. Please login to continue"
    })
  }

  //decode user token
  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY)
    console.log(decodedTokenInfo)

    req.userInfo = decodedTokenInfo;
    next()
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
  // console.log(authHeader)
  // console.log("Auth middleware is called")
}

module.exports = authMiddleware