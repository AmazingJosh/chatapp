import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authroute.js"
import messageRoutes from "./routes/messageroute.js"
import userRoutes from "./routes/usersroute.js"
import connectToMongodb from "./db/mongodbconnectionstring.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import bodyParser from "body-parser"

dotenv.config()
import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.get("/api/auth/signup", (req,res)=>{
    res.send("working fine")
})



server.listen(PORT, ()=>{
    connectToMongodb()
    console.log(`listening on port ${PORT}`)
})