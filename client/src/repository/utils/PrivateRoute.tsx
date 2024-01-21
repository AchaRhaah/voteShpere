import React, { ReactElement } from "react";
import { Route, Navigate, RouteProps, Routes } from "react-router";
import isAuthenticated from "../functions/Authentication";

interface PrivateRouteProps extends RouteProps {
  element: ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  return isAuthenticated() ? (
    <Routes>
      <Route {...rest} element={element} />
    </Routes>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
