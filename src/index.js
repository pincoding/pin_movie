import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { Globalstyle } from "./components/Globalstyle";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Globalstyle />
      <Router />
    </HelmetProvider>
  </React.StrictMode>
);
