import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { Globalstyle } from "./components/Globalstyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Globalstyle />
    <Router />
  </React.StrictMode>
);
