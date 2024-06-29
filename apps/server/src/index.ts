import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";

import userRouter from "@/route/user";
import postRouter from "@/route/post";

const app: Express = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

app.get("/", (req, res) => {
  res.send("Hello API Server");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`Server is running! http://localhost:${PORT}`);
});
