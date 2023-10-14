import  Express  from "express";
import { signup } from "../controllers/auth.controller.js";


const router = Express();

router.post("/signup", signup)



export default router;