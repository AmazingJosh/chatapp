import jwt from "jsonwebtoken"

const genTokenandsetCookie = (userId, res) => {
     const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:"60d"
    } )
    res.cookie("jwt", token, {
        maxAge:60 * 24 * 60 * 60 * 1000,
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV !=="development"

    })
}



export default genTokenandsetCookie