import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Layout from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="px-10 md:px-20">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route element={<Layout />}>
            <Route path="/country/:alpha3Code" element={<Detail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
