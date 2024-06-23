"use client";

import { SetStateAction, useState } from "react";

import { Card } from "@/components/post/Card";
import Form from "@/components/post/Form";
import { useUser } from "@/hook/use-user";

const posts = Array(20).fill({
  username: "田中",
  handle: "@tanaka1234",
  title: "こんにちは",
  content: "初めまして〜",
  good: 10,
  createdAt: "15h",
});

export default function Home() {
  // const user = useUser();

  return (
    <main>
      <div>
      <Form />
      </div>
      <ul>
        {posts.map((post, index) => (
          <Card key={index} {...post} index={index} />
        ))}
      </ul>
    </main>
  );
}
