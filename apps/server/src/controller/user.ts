import { Request, Response, NextFunction } from "express";

import prisma from "@repo/database/src/index";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
    res.status(204).json({ message: "User deleted" });
  } catch (error) {
    next(error);
  }
};
