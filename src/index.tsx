import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NinetailedProvider } from "@ninetailed/experience.js-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <NinetailedProvider
    clientId="3c00cace-cacb-4086-807b-c97b4453e197"
    environment="b2b-demo"
  >
    <App />
  </NinetailedProvider>
);
