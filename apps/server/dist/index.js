"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("@/route/user"));
const post_1 = __importDefault(require("@/route/post"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "http://localhost:3000" }));
app.use("/api/user", user_1.default);
app.use("/api/post", post_1.default);
app.get("/", (req, res) => {
    res.send("Hello API Server");
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something broke!" });
});
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
app.listen(PORT, () => {
    console.log(`Server is running! http://localhost:${PORT}`);
});
