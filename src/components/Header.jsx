import React from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

function Header() {
  return (
    <div className="flex justify-between py-8 bg-white shadow-sm">
      <h1 className="text-2xl font-extrabold ">Where in the world?</h1>
      <div className="flex items-center gap-2 cursor-pointer">
        <MdOutlineDarkMode />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Header;
