import z from "zod";

import { PostRequest } from "./post";

const RequestCreateUser = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type RequestCreateUser = z.infer<typeof RequestCreateUser>;

const UserResponse = z.object({
  userId: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserResponse = z.infer<typeof UserResponse>;
