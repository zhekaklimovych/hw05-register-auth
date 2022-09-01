import {RequestError} from "../interfaces";
import {Document} from "mongoose";
import {NextFunction} from "express";

const handleErrors = (error: RequestError, data: Document, next: NextFunction)=> {
    const {name, code} = error;
    if(name === "MongoServerError" && code === 11000) {
        error.status = 409;
    } else {
        error.status = 400;
        error.message = "missing required name field";
    }
    next()
}

export default handleErrors;