"use client";

import React, { useRef } from "react";

import { Chat } from "@/components/Chat";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { Account } from "@/components/Account";

export default function Message() {
  const textRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r border-gray-300 p-4">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <div className="space-y-4">
          <ul className="space-y-2">
            {Array.from({ length: 20 }, (_, index) => (
              <Account key={index} />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <Chat />
        <div className="flex items-center p-4 border-t border-gray-300">
          <button type="button" className="p-2 hover:bg-gray-300 rounded-full">
            <ImageOutlinedIcon />
          </button>
          <input
            type="text"
            ref={textRef}
            placeholder="What is happening?!"
            className="border p-2 rounded w-full"
          />
          <button type="button" className="p-2 hover:bg-gray-300 rounded-full">
            <SendOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
