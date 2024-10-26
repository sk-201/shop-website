import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProductList from "./pages/ProductList";
const router = createBrowserRouter([
  {
    path: "/",
    name: "Home",
    element: <App />,
  },
  {
    path: "/products",
    name: "Products",
    element: <ProductList />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
