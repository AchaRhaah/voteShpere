import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";

const router1 = createBrowserRouter(router);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router1} />
    </Provider>
  </React.StrictMode>
);
