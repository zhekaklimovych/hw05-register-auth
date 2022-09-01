import express from "express";
import {validation} from "../../middlewares";
import {ctrlWrapper} from "../../helpers";
import * as ctrl from "../../controllers/auth"
import {registerSchema, loginSchema} from "../../models/Auth";

const authRouter = express.Router();

//signup
authRouter.post("/register", validation(registerSchema), ctrlWrapper(ctrl.register));

// signin
authRouter.post("/login", validation(loginSchema), ctrlWrapper(ctrl.login));

//logout
authRouter.get("/logout");

authRouter.get("/current");

export default authRouter;