import React from "react";
import { googleIcon } from "../../assets";

export default function GoogleBtn({ text }: { text: string }) {
  return (
    <button className="flex gap-2 w-[50%] border-[1.5px] p-2 rounded-md items-center justify-center self-center">
      {" "}
      <img src={googleIcon} className="w-6 object-contain" alt="" /> {text}
    </button>
  );
}
