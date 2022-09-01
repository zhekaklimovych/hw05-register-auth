import express, {Express} from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {Request, Response, NextFunction} from "express";
import * as routes from './routes/api';
import {RequestError} from "./interfaces";

dotenv.config()

const {DB_HOST = 'http://localhost:3000', PORT = 3000} = process.env;

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use('/api/register', routes.auth);
app.use('/api/users/', routes.users);

app.use((req: Request, res: Response): void => {
    res.status(404).json({ message: "Not found" })
})

app.use((error:RequestError, req: Request, res:Response, next: NextFunction): void => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({message})
})

mongoose.connect(DB_HOST)
    .then(()=> {
        console.log("DataBase connected...")
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`)
    })
    .catch((error): void => {
        console.log(error.message);
        process.exit(1);
    })
