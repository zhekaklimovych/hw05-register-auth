import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../../models/User";
import { createError } from "../../helpers";
import {IUser} from "../../interfaces";

dotenv.config();

const {SECRET_KEY = ""} = process.env;

const login = async (req: Request, res: Response): Promise<void> | never => {
    const {email, password} = req.body;
    const user: IUser | null = await User.findOne({email});
    if(!user){
        throw createError(401, "Email not found");
    }
    if(!bcrypt.compare(password, user.password)) {
        throw createError(401, "Password wrong");
    }
    const payload = {
        id: user.id,
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "24h"});
    res.json({
        email: user.email,
        token,
    })
}

export default login;