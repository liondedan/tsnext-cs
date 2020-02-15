"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const user_1 = __importDefault(require("./user"));
const message_1 = __importDefault(require("./message"));
const url = process.env.DB_URL;
const connectDb = () => {
    return mongoose_1.default.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
};
exports.connectDb = connectDb;
const models = { User: user_1.default, Message: message_1.default };
exports.default = models;
//# sourceMappingURL=index.js.map