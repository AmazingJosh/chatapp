import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";


const protectRoute = async (req, res, next) => {

	try {
        const {username, password} = req.body
		 const token = jwt.sign({username,password}, process.env.JWT_SECRET, {
            expiresIn:"30d"
        } )
        res.cookie("jwt", token, {
            maxAge:60 * 24 * 60 * 60 * 1000,
            httpOnly:true,
            sameSite:"strict",
            secure:process.env.NODE_ENV !=="development"
    
        })

		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}
        console.log(token)

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findOne(decoded.username).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;
		console.log(user)

		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;
