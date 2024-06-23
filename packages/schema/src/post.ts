import z from "zod";

const PostRequest = z.object({
  postId: z.string().uuid(),
  title: z.string(),
  content: z.string().nullish(),
  published: z.boolean(),
  good: z.literal(0),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
});

export type PostRequest = z.infer<typeof PostRequest>;

const PostResponse = z.object({
  postId: z.string().uuid(),
  title: z.string(),
  content: z.string().nullish(),
  published: z.boolean(),
  good: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PostResponse = z.infer<typeof PostResponse>;

const Post = z.object({
  username: z.string(),
  handle: z.string(),
  title: z.string(),
  content: z.string(),
  good: z.number(),
  createdAt: z.date(),
});

export type Post = z.infer<typeof Post>;