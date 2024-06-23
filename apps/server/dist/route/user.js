"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import prisma from "@repo/database";
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany({
            include: {
                posts: true,
            },
        });
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield prisma.user.findFirst({
        where: { email: email },
        select: { userId: true, password: true },
    });
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    if (user.password !== password) {
        res.status(401).json({ message: "Invalid password" });
        return;
    }
    // ユーザーに関連する投稿を削除
    yield prisma.post.deleteMany({
        where: { userId: user.userId },
    });
    // ユーザーを削除
    yield prisma.user.delete({ where: { email: email } });
    res.status(200).json({ message: "User deleted" });
}));
exports.default = router;
