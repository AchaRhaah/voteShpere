import React, { ReactElement } from "react";
import { Route, Navigate, RouteProps } from "react-router";

interface PrivateRouteProps extends RouteProps {
  element: ReactElement;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  isAuthenticated,
  ...rest
}) => {
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
