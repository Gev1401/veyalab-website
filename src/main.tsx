import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { pages } from "./lib/routes";
import "./index.css";

// Каждая страница пререндерена в свой HTML; id страницы лежит в <html data-page>.
const id = document.documentElement.dataset.page;
const page = pages.find((p) => p.id === id) ?? pages[0];
const root = document.getElementById("root");

if (root?.hasChildNodes()) hydrateRoot(root, <App page={page} />);
else if (root) createRoot(root).render(<App page={page} />); // dev-сервер без пререндера
