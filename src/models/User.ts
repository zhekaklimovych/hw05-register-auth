import mongoose, {Document} from "mongoose";
import Joi from "joi";
import {handleErrors} from "../helpers";
import {IUser} from "../interfaces";

const {Schema, model} = mongoose;

const userSchema = new Schema<IUser>({
    name: {type: String, required: true, match: /[a-zA-Zа-яА-Я]+/},
    password: {type: String, required: true},
    token: {type: String},
    email: {type: String, required: true, unique: true, match: /[a-zA-Z0-9]+@\w+\.[a-zA-Z0-9]+\.[a-zA-Z]+/},
    phone: {type: String, required: true, unique: true, match: /^\+\d\([0-9]{4}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/},
    passport: {type: String, required: true, match: /\d{9}/},
    birthday: {type: String, required: true}
},{versionKey: false, timestamps: true});

export const add = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    token: Joi.string(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    passport: Joi.string().required(),
    birthday: Joi.string().required()
});

//@ts-ignore
userSchema.post('save', handleErrors);

const User = model<IUser>("users", userSchema);

export default User;