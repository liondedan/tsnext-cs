"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = __importDefault(require("../models"));
const router = express_1.Router();
router.get('/', async (req, res) => {
    const messages = await models_1.default.Message.find();
    return res.send(messages);
});
router.get('/:messageId', async (req, res) => {
    const message = await models_1.default.Message.findById(req.params.messageId);
    return res.send(message);
});
router.post('/', async (req, res) => {
    const message = await models_1.default.Message.create({
        text: req.body.text,
        user: req.context.me.id,
    });
    return res.send(message);
});
router.delete('/:messageId', async (req, res) => {
    const message = await models_1.default.Message.findById(req.params.messageId);
    let result = null;
    if (message) {
        result = await message.remove();
    }
    return res.send(result);
});
exports.default = router;
//# sourceMappingURL=message.js.map