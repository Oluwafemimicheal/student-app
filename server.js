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
app.use(express.urlencoded({ extended: true }));
app.use(configureCors())
connectDB()

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/home", homeRoutes)
app.use("/api/v1/admin", adminRoutes)

app.get("/", (req, res) => {
  res.status(200).send("Server is live")
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})