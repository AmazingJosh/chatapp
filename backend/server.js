import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authroute.js"
import messageRoutes from "./routes/messageroute.js"
import userRoutes from "./routes/usersroute.js"
import connectToMongodb from "./db/mongodbconnectionstring.js"
import cookieParser from "cookie-parser"
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)

app.get("/", (req,res)=>{
    res.send("hello world")
})



app.listen(PORT, ()=>{
    connectToMongodb()
    console.log(`listening on port ${PORT}`)
})