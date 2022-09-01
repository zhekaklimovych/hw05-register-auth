import {Request, Response} from "express";
import bcrypt from "bcryptjs";

import User from "../../models/User";
import { createError } from "../../helpers";
import {IUser} from "../../interfaces";

const register = async(req: Request, res: Response): Promise<void> | never => {
    const {email, password} = req.body;
    const user: IUser | null = await User.findOne({email});
    if(user) {
        throw createError(409, "Email is already exist")
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result: IUser = await User.create({email, password: hashPassword});
    res.status(201).json({
        email: result.email,
    })
}

export default register;