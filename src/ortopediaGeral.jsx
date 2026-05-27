import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import OrtopediaGeralApp from "./OrtopediaGeralApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OrtopediaGeralApp />
  </StrictMode>
);
