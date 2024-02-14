import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello, Developer!</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
