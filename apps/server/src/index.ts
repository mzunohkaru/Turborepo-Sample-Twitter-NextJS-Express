import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";

import userRouter from "./route/user";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello API Server");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`Server is running! http://localhost:${PORT}`);
});
