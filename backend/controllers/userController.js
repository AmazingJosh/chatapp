import User from "../models/usermodel.js"

export const getUsersForSidebar = async(req,res) =>{
    try {

        const loggedInUserId = req.user._Id
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password")

        res.status(200).json(filteredUsers)
        
    } catch (error) {
        console.log("user error=>", error.message)
        res.status(500).json({error:"internal error"})
        
    }



}