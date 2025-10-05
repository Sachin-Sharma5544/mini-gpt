import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";
import { ThemeProvider } from "./context/theme/ThemeContext";

const el = document.getElementById("root");
if (el) {
    const root = createRoot(el);
    root.render(
        <React.StrictMode>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );
} else {
    throw new Error("Could not find root element");
}
