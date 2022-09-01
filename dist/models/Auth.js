"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const emailRegexp = /^[\w.]+@[\w.]+\.[\w.]+$/;
exports.registerSchema = joi_1.default.object({
    email: joi_1.default.string().pattern(emailRegexp).required(),
    password: joi_1.default.string().min(6).required(),
    repeat_password: joi_1.default.ref("password"),
});
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().pattern(emailRegexp).required(),
    password: joi_1.default.string().min(6).required(),
});
