import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MetaApp from "./MetaApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MetaApp />
  </StrictMode>
);
