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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updateBad = exports.updateGood = exports.getPosts = exports.createPost = void 0;
const index_1 = __importDefault(require("@repo/database/src/index"));
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, content } = req.body;
        const user = yield index_1.default.user.findUnique({
            where: { userId: userId },
        });
        if (!user) {
            return res.status(400).json({ message: "Invalid userId" });
        }
        const post = yield index_1.default.post.create({
            data: {
                userId: userId,
                content: content,
            },
        });
        res.status(201).json(post);
    }
    catch (error) {
        next(error);
    }
});
exports.createPost = createPost;
const getPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield index_1.default.post.findMany({
            include: {
                user: {
                    select: {
                        userId: true,
                        name: true,
                    },
                },
            },
        });
        res.status(200).json(posts);
    }
    catch (error) {
        next(error);
    }
});
exports.getPosts = getPosts;
const updateGood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { postId } = req.body;
        yield index_1.default.post.update({
            where: {
                postId: postId,
            },
            data: {
                good: {
                    increment: 1,
                },
            },
        });
        res.status(204).json({ message: "Good count updated" });
    }
    catch (error) {
        next(error);
    }
});
exports.updateGood = updateGood;
const updateBad = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { postId } = req.body;
        yield index_1.default.post.update({
            where: {
                postId: postId,
            },
            data: {
                good: {
                    decrement: 1,
                },
            },
        });
        res.status(204).json({ message: "Good count updated" });
    }
    catch (error) {
        next(error);
    }
});
exports.updateBad = updateBad;
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, postId } = req.body;
        const post = yield index_1.default.post.findUnique({
            where: {
                postId: postId,
            },
        });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        if (post.userId !== userId) {
            return res
                .status(403)
                .json({ message: "You are not allowed to delete this post" });
        }
        yield index_1.default.post.delete({
            where: {
                postId: postId,
            },
        });
        res.status(204).json({ message: "Post deleted" });
    }
    catch (error) {
        next(error);
    }
});
exports.deletePost = deletePost;
