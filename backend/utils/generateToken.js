import jwt from "jsonwebtoken"

const genTokenandsetCookie = (userId, res )=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:'15d'
    })

    res.cookie("jwt", token, {
        maxAge:15 * 24 * 60 *1000,
        sameSite:"strict"
    })

}

export default genTokenandsetCookie