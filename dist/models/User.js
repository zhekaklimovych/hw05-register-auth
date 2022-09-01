"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const helpers_1 = require("../helpers");
const { Schema, model } = mongoose_1.default;
const userSchema = new Schema({
    name: { type: String, required: true, match: /[a-zA-Zа-яА-Я]+/ },
    password: { type: String, required: true },
    token: { type: String },
    email: { type: String, required: true, unique: true, match: /[a-zA-Z0-9]+@\w+\.[a-zA-Z0-9]+\.[a-zA-Z]+/ },
    phone: { type: String, required: true, unique: true, match: /^\+\d\([0-9]{4}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/ },
    passport: { type: String, required: true, match: /\d{9}/ },
    birthday: { type: String, required: true }
}, { versionKey: false, timestamps: true });
exports.add = joi_1.default.object({
    name: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    token: joi_1.default.string(),
    email: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    passport: joi_1.default.string().required(),
    birthday: joi_1.default.string().required()
});
userSchema.post('save', helpers_1.handleErrors);
const User = model("users", userSchema);
exports.default = User;
