"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("@/controller/user");
const router = (0, express_1.Router)();
router.post("/", user_1.createUser);
router.get("/", user_1.getUsers);
router.delete("/", user_1.deleteUser);
exports.default = router;
