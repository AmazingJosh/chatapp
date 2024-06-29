import express from "express"
import { Login, Logout, SignUp } from "../controllers/authController.js"

const router = express.Router()

router.post("/login", Login)
router.get("/login", Login)
router.post("/signup", SignUp)
router.post("/logout", Logout )


export default router;