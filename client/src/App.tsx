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
    path: "/dashboard/*",
    element: <Dashboard />,
    children: [
      {
        // index: true,
        path: "voting/*",
        element: <PrivateRoute element={<Voting />} />,
      },
      {
        path: "create-election/*",
        element: <PrivateRoute element={<CreateElection />} />,
        children: [
          {
            path: "description",
            element: <PrivateRoute element={<Description />} />,
          },
          {
            path: "candidate",
            element: <PrivateRoute element={<Candidate />} />,
          },
          { path: "voters", element: <PrivateRoute element={<Voters />} /> },
        ],
      },
      { path: "history/*", element: <PrivateRoute element={<History />} /> },
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
