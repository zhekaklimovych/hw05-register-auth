"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleErrors = (error, data, next) => {
    const { name, code } = error;
    if (name === "MongoServerError" && code === 11000) {
        error.status = 409;
    }
    else {
        error.status = 400;
        error.message = "missing required name field";
    }
    next();
};
exports.default = handleErrors;
