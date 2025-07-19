import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/critical.css";
import "./styles/index.css";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
