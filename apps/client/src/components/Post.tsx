import { useState } from "react";
import { format } from "date-fns";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";

import { ResponseUser } from "@repo/schema";
import { usePost } from "@/hook/use-post";

// type Props = {
//   postId: string;
//   content: string;
//   good: number;
//   createdAt: Date;
//   user: ResponseUser;
// };

type Props = NonNullable<ReturnType<typeof usePost>["postData"]>[number];

export function Post({ postId, content, good, createdAt, user }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const formattedDate = format(new Date(createdAt), "yyyy-MM-dd HH:mm:ss");

  const handleGoodClick = () => {
    setIsFavorite(true);
  };

  const handleBadClick = () => {
    setIsFavorite(false);
  };

  const handleCommentClick = () => {
    console.log("comment");
  };

  return (
    <div className="border p-4 mb-4 rounded">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="ml-2">
          <div className="font-bold">
            {user.name} <span className="text-gray-500">@{user.email}</span>
          </div>
          <div className="text-gray-500">{formattedDate}</div>
        </div>
      </div>
      <div>{content}</div>
      <div className="flex mt-2 justify-between">
        <div
          className="text-black whitespace-pre-line"
          onClick={isFavorite ? handleBadClick : handleGoodClick}
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

          {good}
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
