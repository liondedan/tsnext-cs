"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = __importDefault(require("../models"));
const router = express_1.Router();
router.get('/', async (req, res) => {
    console.log(models_1.default.User);
    const users = await models_1.default.User.find();
    return res.send(users);
});
router.get('/:userId', async (req, res) => {
    const user = await models_1.default.User.findById(req.params.userId);
    return res.send(user);
});
router.get('/cat', async (req, res) => {
    const dewi = new models_1.default.User({ username: 'dewi' });
    await dewi.save();
});
exports.default = router;
//# sourceMappingURL=user.js.map