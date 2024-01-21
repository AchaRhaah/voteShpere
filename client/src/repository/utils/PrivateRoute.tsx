import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import isAuthenticated from "../functions/Authentication";

interface PrivateRouteProps {
  Component: React.ElementType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component }) => {
  // Your authentication logic goes here...

  return isAuthenticated() ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
