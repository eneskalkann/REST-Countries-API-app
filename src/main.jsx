import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="px-10 md:px-20 scroll-smooth">
      <Header />
      <App />
    </div>
  </React.StrictMode>
);
