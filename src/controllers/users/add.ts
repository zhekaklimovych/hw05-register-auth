import User from "../../models/User";
import {Request, Response} from "express";
import {IUser} from "../../interfaces";

const add = async (req: Request, res: Response): Promise<void> => {
    const result: IUser = await User.create(req.body);
    const user: IUser = {
        id: result.id,
        name: result.name,
        password: result.password,
        token: result.token,
        email: result.email,
        phone: result.phone,
        passport: result.passport,
        birthday: result.birthday
    }
    res.status(201).json(user);
}

export default add;