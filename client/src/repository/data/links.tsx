import React from "react";
import { LuVote, LuHistory } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";

interface sidebarInfo {
  title: string;
  link: string;
  icon: JSX.Element;
}
export const sidebarLinks: sidebarInfo[] = [
  {
    title: "Votings",
    link: "/dashboard/voting",
    icon: <LuVote className=" text-xl font-bold" />,
  },
  {
    title: "crete election",
    link: "/dashboard/create-election/description",
    icon: <IoCreateOutline className=" text-xl font-bold" />,
  },
  {
    title: "history",
    link: "/dashboard/history",
    icon: <LuHistory className=" text-xl font-bold" />,
  },
];
