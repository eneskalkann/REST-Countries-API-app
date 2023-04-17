import React from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

function Header() {
  return (
    <div className="flex justify-between py-8 px-20 bg-white shadow-sm">
      <h1 className=" font-extrabold text-2xl">Where in the world?</h1>
      <div className="flex gap-2 items-center cursor-pointer">
        <MdOutlineDarkMode />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Header;
