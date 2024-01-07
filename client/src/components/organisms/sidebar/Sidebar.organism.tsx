import React from "react";
import { sidebarLinks } from "../../../repository/data/links";
import { Logo } from "../../atoms";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useLocation } from "react-router-dom";

// F2F8FD;

export default function Sidebar() {
  const location = useLocation();
  const pathSegment = location.pathname.split("/");
  const lastSegment = pathSegment[pathSegment.length - 1];
  return (
    <div className="h-full w-[18%] border-r pl-8 fixed top-0 left-0 z-10 bg-white overflow-y-auto">
      <div className="h-[30%] mt-[15%]">
        <Logo textColor="text-[#065AD8]" />
      </div>
      <ul className="text-[#B9C2CB] font-medium w-[80%] flex flex-col justify-center">
        {sidebarLinks.map((val, index) => {
          const valSeg: string[] = val.link.split("/");
          const path = valSeg[valSeg.length - 1];
          return (
            <Link to={val.link}>
              <li
                key={index}
                className={`${
                  lastSegment == path
                    ? "bg-[#F2F8FD] rounded-lg text-[#065AD8] "
                    : ""
                } flex gap-2 items-center p-2 `}
              >
                {val.icon}
                {val.title}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="w-full h-[30%] flex ">
        <button className="flex items-end gap-2 bg-[#EC9A4A] text-white rounded-xl p-2 self-end">
          <IoIosLogOut className="font-bold text-2xl" />
          <p>Sign out</p>
        </button>
      </div>
    </div>
  );
}