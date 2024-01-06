import React from "react";
import { LuCheckCircle } from "react-icons/lu";

export default function Logo({
  textColor = "text-white",
}: {
  textColor?: string;
}) {
  return (
    <div
      className={`${textColor} flex gap-1 text-2xl items-center font-semibold`}
    >
      <LuCheckCircle className="text-[1.6rem]" /> <h2>VoteSphere</h2>
    </div>
  );
}
