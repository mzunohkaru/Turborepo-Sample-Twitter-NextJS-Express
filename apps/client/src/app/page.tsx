"use client";

import { Sidebar } from "@/components/Sidebar";
import { Post } from "@/components/Post";
import { Form } from "@/components/Form";

import { useUser } from "@/hook/use-user";
import { usePost } from "@/hook/use-post";

export default function Home() {
  const { userData, userError } = useUser();
  const { postData, postError } = usePost();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search posts and users"
            className="border p-2 rounded w-1/2"
          />
          <button className=" border p-2 rounded bg-red-500 text-white">
            Log out
          </button>
        </div>
        <div className="mb-4">
          <button className="border p-2 rounded mr-2">ALL</button>
          <button className="border p-2 rounded">Following</button>
        </div>
        <div className="mb-4">
          <Form />
        </div>
        {postData && postData.map((post) => (
          <Post key={post.postId} {...post} />
        ))}
        <div className="flex justify-center mt-4">
          <button className="border p-2 rounded mx-1">1</button>
          <button className="border p-2 rounded mx-1">2</button>
        </div>
      </div>
    </div>
  );
}
