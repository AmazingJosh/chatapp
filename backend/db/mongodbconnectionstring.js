import mongoose from "mongoose";

const connectToMongodb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to mongodb")
        
    } catch (error) {
        console.log(error.message, "error connecting to mogodb")
        
    }
}

export default connectToMongodb

