import React from "react";

export function Chat() {
  return (
    <div>
      <div className="border-b border-gray-700 pb-4 mb-4">
        <h2 className="text-xl font-bold">けいすけ</h2>
      </div>
      <div className="space-y-4 text-white">
        <div className="flex justify-end">
          <div className="bg-blue-600 p-4 rounded-lg max-w-xs">
            <p>待ってます！😍</p>
            <p className="text-xs text-gray-400 text-right">
              Jun 14, 2023, 1:22 AM
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-800 p-4 rounded-lg max-w-xs">
            <p>
              久しぶりです！駄菓子屋からの脱出ゲームのばあばの言葉に勇気をもらいました！
            </p>
            <p className="text-xs text-gray-400">Jul 6, 2023, 9:05 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
