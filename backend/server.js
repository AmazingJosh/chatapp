import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authroute.js"
import messageRoutes from "./routes/messageroute.js"
import userRoute from "./routes/userRoute.js"
import connectToMongodb from "./db/mongodbconnectionstring.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import bodyParser from "body-parser"

dotenv.config()
import { app, server } from "./socket/socket.js"
import path from "path"

const PORT = process.env.PORT

const __dirname = path.resolve()
app.use(cors({
    origin:"*",
    credentials:'',
    methods :["POST","GET","PUT","DELETE"],
    
}))

app.use(cookieParser()); 
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



app.use(express.static(path.join(__dirname, "frontend/dist")))


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoute)

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})



server.listen(PORT, ()=>{
    connectToMongodb()
    console.log(`listening on port ${PORT}`)
})