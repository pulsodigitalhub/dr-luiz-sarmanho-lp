import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RegionalLandingApp from "./RegionalLandingApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RegionalLandingApp />
  </StrictMode>
);
