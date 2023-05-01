import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="px-10 md:px-20 scroll-smooth">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/country/:alpha3Code" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
