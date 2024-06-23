import { Router, Request, Response } from "express";

import { UserResponse } from "@repo/schema/src/user";
// import prisma from "@repo/database";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
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
  await prisma.post.deleteMany({
    where: { userId: user.userId },
  });
  // ユーザーを削除
  await prisma.user.delete({ where: { email: email } });
  res.status(200).json({ message: "User deleted" });
});

export default router;
