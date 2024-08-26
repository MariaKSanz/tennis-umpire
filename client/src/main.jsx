import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AddMatch from "./pages/AddMatch";
import EditMatch from "./pages/EditMatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/encounters`)
        .then((res) => res.data),
  },
  {
    path: "/add-match",
    element: <AddMatch />,
  },
  {
    path: "/edit-match/:id",
    element: <EditMatch />,
    loader: ({ params }) =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/encounters/${params.id}`)
        .then((res) => res.data),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
