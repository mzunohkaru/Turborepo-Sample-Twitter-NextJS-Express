import { Request, Response, NextFunction } from "express";

import prisma from "@repo/database/src/index";

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, content } = req.body;

    const user = await prisma.user.findUnique({
      where: { userId: userId },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const post = await prisma.post.create({
      data: {
        userId: userId,
        content: content,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: {
          select: {
            userId: true,
            name: true,
            email: true,
          },
        },
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const updateGood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { postId } = req.body;
    await prisma.post.update({
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
  } catch (error) {
    next(error);
  }
};

export const updateBad = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { postId } = req.body;
    await prisma.post.update({
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
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, postId } = req.body;
    const post = await prisma.post.findUnique({
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

    await prisma.post.delete({
      where: {
        postId: postId,
      },
    });
    res.status(204).json({ message: "Post deleted" });
  } catch (error) {
    next(error);
  }
};
