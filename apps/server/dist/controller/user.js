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
exports.deleteUser = exports.getUsers = exports.createUser = void 0;
const index_1 = __importDefault(require("@repo/database/src/index"));
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const user = yield index_1.default.user.create({
            data: {
                name: name,
                email: email,
                password: password,
            },
        });
        res.status(201).json(user);
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield index_1.default.user.findMany({
            include: {
                posts: true,
            },
        });
        res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
});
exports.getUsers = getUsers;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield index_1.default.user.findFirst({
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
        yield index_1.default.post.deleteMany({
            where: { userId: user.userId },
        });
        // ユーザーを削除
        yield index_1.default.user.delete({ where: { email: email } });
        res.status(204).json({ message: "User deleted" });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteUser = deleteUser;
