import { Router, Request, Response, NextFunction } from "express";
// import prisma from "@repo/database";
import { PrismaClient } from "@prisma/client";

import { createUser, getUsers, deleteUser } from "@/controller/user";

const router = Router();

router.post("/", createUser);

router.get("/", getUsers);

router.delete("/", deleteUser);

export default router;
