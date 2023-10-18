import  Express  from "express";
import { signup, signin } from "../controllers/auth.controller.js";


const router = Express();

router.post("/signup", signup)
router.post("/signin", signin)



export default router;