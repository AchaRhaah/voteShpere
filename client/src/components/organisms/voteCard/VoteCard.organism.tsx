import React from "react";

export default function VoteCard() {
  return (
    <div className="w-[95%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl p-3 text-sm ">
      <div className="flex  gap-2">
        <p>name:</p>
        <p>class prefect</p>
      </div>
      {/* votes */}
      <div className="gap-2 flex flex-col mt-4">
        <div className="w-full">
          <div className="flex justify-between">
            <p>candidate1</p>
            <p>50%</p>
          </div>
          <div className="border w-full h-4">
            <div className="w-1/2 h-full bg-[#3D70A7]"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <p>candidate1</p>
            <p>70%</p>
          </div>
          <div className="border w-full h-4">
            <div className="w-[70%] h-full bg-[#CF4D6F]"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <p>candidate1</p>
            <p>40%</p>
          </div>
          <div className="border w-full h-4">
            <div className="w-2/5 h-full bg-[#EFAA67]"></div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <button className="w-[8rem] bg-[#065AD8] text-white font-medium my-4  p-1 rounded-md">
          Back to vote
        </button>
      </div>
    </div>
  );
}
