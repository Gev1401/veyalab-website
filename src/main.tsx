import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const baseName =
  window.location.hostname === "veyalab.com" ? "/" : "/veyalab-website";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={baseName}>
    <App />
  </BrowserRouter>
);