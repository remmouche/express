import express from "express"
import { userLogin, userLogout } from "../controllers/userController.js"

const router = express.Router()

router.get("/login", userLogin);
router.get("/logout", userLogout);

export default router