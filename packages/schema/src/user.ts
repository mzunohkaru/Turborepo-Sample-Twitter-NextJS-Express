import z from "zod";

import { PostRequest } from "./post";

const UserRequest = z.object({
  userId: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  posts: z.object({}).nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
});

export type UserRequest = z.infer<typeof UserRequest>;

const UserResponse = z.object({
  userId: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserResponse = z.infer<typeof UserResponse>;
