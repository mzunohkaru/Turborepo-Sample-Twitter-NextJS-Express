import z from "zod";

import { ResponseUser } from "./user";

const RequestCreatePost = z.object({
  userId: z.string().uuid(),
  content: z.string().nullish(),
  published: z.boolean(),
});

export type RequestCreatePost = z.infer<typeof RequestCreatePost>;

const ResponsePost = z.object({
  postId: z.string().uuid(),
  userId: z.string().uuid(),
  content: z.string(),
  good: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.object({
    userId: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
  }),
});

export type ResponsePost = z.infer<typeof ResponsePost>;
