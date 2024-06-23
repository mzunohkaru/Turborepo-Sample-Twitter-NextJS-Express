"use client";

import Link from "next/link";

// Home
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

export function Sidebar() {
  return (
    <div className="w-18 h-screen bg-gray-100 p-4">
      <ul className="flex flex-col items-center">
        <div className="text-2xl font-bold mb-4">X</div>
        <li className="mb-2">
          <Link href="#" legacyBehavior>
            <a className="flex items-center p-2 hover:bg-gray-200 rounded">
              <HomeOutlinedIcon className="ml-2" />
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="#" legacyBehavior>
            <a className="flex items-center p-2 hover:bg-gray-200 rounded">
              <Person2OutlinedIcon className="ml-2" />
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="#" legacyBehavior>
            <a className="flex items-center p-2 hover:bg-gray-200 rounded">
              <NotificationsActiveOutlinedIcon className="ml-2" />
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/message" legacyBehavior>
            <a className="flex items-center p-2 hover:bg-gray-200 rounded">
              <EmailOutlinedIcon className="ml-2" />
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <button
            onClick={() => {}}
            className="flex items-center p-2 hover:bg-gray-200 rounded"
          >
            <MoreHorizOutlinedIcon className="ml-2" />
          </button>
        </li>
      </ul>
    </div>
  );
}
