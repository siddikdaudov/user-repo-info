import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from "./app/providers";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
