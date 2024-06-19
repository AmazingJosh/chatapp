import User from "../models/usermodel.js"
import bcrypt from "bcryptjs"
import genTokenandsetCookie from "../utils/generateToken.js";
export const SignUp = async(req,res)=>{
    try{

        const {fullname, username, password, confirmPassword, gender} = req.body;
      if(password !== confirmPassword) {
        return res.status(400).json({error:'passwords do not match'})
      }

      const user= await User.findOne({username})

      if(user) {
        return res.status(401).json({error:"username already exists"})
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt)
      const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
      const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

      const newUser = new User({fullname, 
        username,
         password:hashedPassword,
         gender,
         profilepic:gender=="male" ? boyprofilepic:girlprofilepic
        
      })
      if(newUser) {
        genTokenandsetCookie(newUser._id, res);
        await newUser.save();
        res.status(201).json({
          _id:newUser._id,
          fullname:newUser.fullname,
          username:newUser.username,
          profilePic:newUser.profilepic
        })
      }else{
        res.status(400).json({error:"invalid user data"})

      }

    
    
    } catch(error){
      res.status(500).json(error.message)
        console.log(error.message, "")
    }

}

export const Login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		genTokenandsetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullname,
			username: user.username,
			profilePic: user.profilepic,
		});
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