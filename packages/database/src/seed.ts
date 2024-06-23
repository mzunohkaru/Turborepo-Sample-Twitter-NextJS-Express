import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

async function Seed() {
  const userPostData = {
    userId: uuidv4(),
    name: "田中",
    email: "tanaka@example.com",
    password: "1234",
    posts: {
      create: {
        postId: uuidv4(),
        title: "初めまして",
        content: "今日からよろしくお願いします！",
        published: true,
        good: 0,
      },
    },
  };

  await prisma.user.create({
    data: userPostData,
  });
}

Seed()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
