import React from "react";

export default function Avatars() {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      <img
        className="w-8 h-8 border-2 border-[#065AD8] rounded-full dark:border-gray-800"
        src="https://i.pravatar.cc/100?img=1"
        alt=""
      />
      <img
        className="w-8 h-8 border-2 border-[#065AD8] rounded-full dark:border-gray-800"
        src="https://i.pravatar.cc/100?img=2"
        alt=""
      />
      <img
        className="w-8 h-8 border-2 border-[#065AD8] rounded-full dark:border-gray-800"
        src="https://i.pravatar.cc/100?img=3"
        alt=""
      />
      <img
        className="w-8 h-8 border-2 border-[#065AD8] rounded-full dark:border-gray-800"
        src="https://i.pravatar.cc/100?img=4"
        alt=""
      />
    </div>
  );
}
