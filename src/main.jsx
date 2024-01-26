import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./scss/App.scss";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
