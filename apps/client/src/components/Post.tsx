import { useState } from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";

type Props = {
  username: string;
  content: string;
  good: number;
  createdAt: string;
};

export function Post({ username, content, good, createdAt }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleCommentClick = () => {
    console.log("comment");
  };

  return (
    <div className="border p-4 mb-4 rounded">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="ml-2">
          <div className="font-bold">{username}</div>
          <div className="text-gray-500">{createdAt}</div>
        </div>
      </div>
      <div>{content}</div>
      <div className="flex mt-2 justify-between">
        <div
          className="text-black whitespace-pre-line"
          onClick={handleFavoriteClick}
        >
          {isFavorite ? (
            <FavoriteOutlinedIcon className="text-red-500" />
          ) : (
            <FavoriteBorderOutlinedIcon className="text-gray-500" />
          )}
          {good}
        </div>
        <div
          className="text-black whitespace-pre-line"
          onClick={handleCommentClick}
        >
          <ChatBubbleOutlineIcon className="text-gray-500" />

          {0}
        </div>

        <div
          className="text-black whitespace-pre-line"
          onClick={handleCommentClick}
        >
          <LocalFireDepartmentRoundedIcon className="text-gray-500" />

          {0}
        </div>

        <div
          className="text-black whitespace-pre-line"
          onClick={handleCommentClick}
        >
          <ReplyRoundedIcon className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
