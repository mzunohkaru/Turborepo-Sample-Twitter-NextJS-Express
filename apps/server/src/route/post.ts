import { Router} from "express";

import { createPost, getPosts, updateGood, updateBad, deletePost } from "@/controller/post";

const router = Router();

router.post("/", createPost);

router.get("/", getPosts);

router.put("/good", updateGood);

router.put("/bad", updateBad);

router.delete("/", deletePost);

export default router;
