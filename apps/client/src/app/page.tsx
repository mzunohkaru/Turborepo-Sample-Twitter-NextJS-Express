"use client";

import { Sidebar } from "@/components/Sidebar";
import { Post } from "@/components/Post";
import { Form } from "@/components/Form";

const posts = [
  {
    username: "tarako25",
    content: "test10",
    good: 10,
    createdAt: "2024/1/22 21:32:22",
  },
  {
    username: "tarako25",
    content: "test9",
    good: 200,
    createdAt: "2024/1/22 21:32:16",
  },
  {
    username: "tarako25",
    content: "test8",
    good: 0,
    createdAt: "2024/1/22 21:32:12",
  },
  {
    username: "tarako25",
    content: "test7",
    good: 2,
    createdAt: "2024/1/22 21:32:09",
  },
  {
    username: "tarako25",
    content: "test6",
    good: 3,
    createdAt: "2024/1/22 21:32:06",
  },
  {
    username: "tarako25",
    content: "test5",
    good: 4,
    createdAt: "2024/1/22 21:32:03",
  },
  {
    username: "tarako25",
    content: "test4",
    good: 5,
    createdAt: "2024/1/22 21:22:59",
  },
];

export default function Home() {
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
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
        <div className="flex justify-center mt-4">
          <button className="border p-2 rounded mx-1">1</button>
          <button className="border p-2 rounded mx-1">2</button>
        </div>
      </div>
    </div>
  );
}
