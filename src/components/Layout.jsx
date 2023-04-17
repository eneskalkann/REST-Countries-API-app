import React from "react";
import Header from "./header";
import App from "../App";
import Filter from "./Filter";

function Layout() {
  return (
    <div className="font-nunito bg-veryLightGray scroll-smooth">
      <Header />
      <div className="px-20">
        <Filter />
        <App />
      </div>
    </div>
  );
}

export default Layout;
