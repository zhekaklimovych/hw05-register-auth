"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict"
};
const createError = (status, message = messages[status]) => {
    const error = new Error(message);
    error['status'] = status;
    return error;
};
exports.default = createError;
