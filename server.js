require("dotenv").config()
const express = require("express")
const connectDB = require("./database/db")
const authRoutes = require("./routes/auth")
const homeRoutes = require("./routes/home")
const adminRoutes = require("./routes/admin")
const { configureCors } = require("./config/cors")


const app = express()
const PORT = process.env.PORT || 3100

app.use(express.json())
app.use(configureCors())
app.use("/api/auth", authRoutes)
app.use("/api/home", homeRoutes)
app.use("/api/admin", adminRoutes)


connectDB()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})