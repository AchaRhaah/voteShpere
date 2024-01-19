import React from "react";
import { Outlet } from "react-router-dom";
import {
  Login,
  Register,
  Dashboard,
  Voting,
  CreateElection,
  History,
} from "./pages";
import PrivateRoute from "./repository/utils/PrivateRoute";
import {
  Description,
  Candidate,
  Voters,
} from "./pages/dashboards/tabs/createElection/stages";

export const router = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "voting", element: <Voting /> },
      {
        path: "create-election",
        element: <CreateElection />,
        children: [
          { path: "description", element: <Description /> },
          { path: "candidate", element: <Candidate /> },
          { path: "voters", element: <Voters /> },
        ],
      },
      { path: "history", element: <History /> },
    ],
  },
];
export default function App() {
  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  );
}
