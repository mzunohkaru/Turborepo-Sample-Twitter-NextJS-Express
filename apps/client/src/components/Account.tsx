import React from "react";

export function Account() {
  return (
    <li className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
      <div>
        <p className="font-bold">けいすけ</p>
        <p className="text-sm text-gray-400">Dec 13, 2023</p>
      </div>
    </li>
  );
}
