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
import UserDashboard from "./pages/dashboards/UserDashboard";

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
    path: "/dashboard/*",
    element: <PrivateRoute Component={UserDashboard} />,
    children: [
      {
        // index: true,
        path: "voting/*",
        element: <PrivateRoute Component={Voting} />,
      },
      {
        path: "create-election/*",
        element: <PrivateRoute Component={CreateElection} />,
        children: [
          {
            path: "description",
            element: <PrivateRoute Component={Description} />,
          },
          {
            path: "candidate",
            element: <PrivateRoute Component={Candidate} />,
          },
          { path: "voters", element: <PrivateRoute Component={Voters} /> },
        ],
      },
      { path: "history/*", element: <PrivateRoute Component={History} /> },
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
