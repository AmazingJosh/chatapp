import User from "../models/usermodel.js"
import bcrypt from "bcrypt"
import genTokenandsetCookie from "../utils/generateToken.js"


  export const SignUp=async(req,res)=>{
    const {fullname, username, password, confirmPassword, gender} = req.body

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
      fullname,
      username,
      password:hashedPassword,
      gender,
      profilepic:gender=="male" ? boyprofilepic:girlprofilepic

    })

      if (newUser){
       genTokenandsetCookie(newUser._id, res)
        await newUser.save()
      }
    res.status(201).json({message:"user created successfully", newUser})


  }
   

export const Login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

   genTokenandsetCookie(user._id, res)
		
   res.status(200).json({
    _id:user._id,
    fullname:user.fullname,
    username:user.username,
    profilepic:user.profilepic
   })
   

	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};



export const Logout = async (req, res)=>{

  try {
  res.cookie("jwt","", {maxAge:0})
  res.status(200).json({message:"logged out successfully"})
   

    
  } catch (error) {
    console.log("Error in the signup controller", error.message)
    res.status(500).json({error:"internal error server"})

}
}