import React from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between py-8 bg-white shadow-sm">
      <div className="text-lg font-extrabold md:text-2xl">
       <Link to="/">Where in the world?</Link>
      </div>
      <div className="flex items-center gap-2 text-sm cursor-pointer md:text-base">
        <MdOutlineDarkMode />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Header;
