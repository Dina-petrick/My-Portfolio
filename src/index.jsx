import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// cursor
import CursorProvider from "./context/CursorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CursorProvider>
      <App />
    </CursorProvider>
  </React.StrictMode>
);
