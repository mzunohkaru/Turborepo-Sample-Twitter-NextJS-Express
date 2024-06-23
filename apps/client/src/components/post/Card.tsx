import React from "react";
import { useState } from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import { Post } from "@repo/schema";

const posts = Array(20).fill({
  username: "田中",
  handle: "@tanaka1234",
  title: "こんにちは",
  content: "初めまして〜",
  good: 10,
  createdAt: "15h",
});

type Props = Post & {
  index: number;
};

export const Card = ({
  index,
  username,
  handle,
  title,
  content,
  good,
  createdAt,
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md my-2 mx-4">
      <div className="flex items-center">
        <div>
          <div className="text-white font-bold">
            {index} {username}
            <span className="text-gray-500">
              {handle} ・ {createdAt.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <div className="text-white whitespace-pre-line">{title}</div>
      <div className="text-white whitespace-pre-line">{content}</div>

      <div
        className="text-white whitespace-pre-line"
        onClick={handleFavoriteClick}
      >
        {isFavorite ? (
          <FavoriteOutlinedIcon className="text-red-500" />
        ) : (
          <FavoriteBorderOutlinedIcon className="text-gray-500" />
        )}
        {good}
      </div>
    </li>
  );
};
