import React from "react";
import { Sidebar } from "../../components/organisms";
import { Outlet } from "react-router-dom";
import { Voting, CreateElection } from "..";

export default function UserDashboard() {
  return (
    <div className="w-full h-screen flex justify-between">
      <div>
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <div className="h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
