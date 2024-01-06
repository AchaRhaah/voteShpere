import { Middleware } from "@reduxjs/toolkit";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  const returnValue = next(action);
  return returnValue;
};

export default [loggerMiddleware];
