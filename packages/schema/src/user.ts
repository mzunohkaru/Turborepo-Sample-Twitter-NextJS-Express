import z from "zod";

const RequestCreateUser = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type RequestCreateUser = z.infer<typeof RequestCreateUser>;

const ResponseUser = z.object({
  userId: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
});

export type ResponseUser = z.infer<typeof ResponseUser>;
