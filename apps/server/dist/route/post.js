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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
// router.post("/", async (req: Request, res: Response) => {
//   const { content } = req.body;
//   const userId = req.userId;
// });
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield prisma.post.findMany();
        res.status(200).json(posts);
    }
    catch (error) {
        next(error);
    }
}));
router.delete("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { postId } = req.body;
        const post = yield prisma.post.findUnique({
            where: {
                postId: postId,
            },
        });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        // if (post.userId !== req.userId) {
        //   return res.status(403).json({ message: "You are not allowed to delete this post" });
        // }
        yield prisma.post.delete({
            where: {
                postId: postId,
            },
        });
        res.status(204).json({ message: "Post deleted" });
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
