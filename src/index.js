import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// src/index.js

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import "./Styles/media.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./Components/Product";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/:productId",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
