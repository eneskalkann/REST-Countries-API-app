import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

function Filter() {
  return (
    <div className="flex justify-between items-center my-8">
      <div className="w-[480px] bg-white shadow-md rounded-lg">
        <div className="flex items-center gap-4 px-5 py-3">
          <CiSearch />
          <input
            type="text"
            placeholder="Search for a country..."
            className="w-full"
          />
        </div>
      </div>
      <div className="relative bg-white group transition-all">
        <div className="flex items-center px-3 py-3 shadow-md rounded-lg gap-9 justify-between cursor-pointer">
          <span>Filter By Religion</span>
          <MdKeyboardArrowDown />
        </div>
        <div className="absolute hidden group-hover:flex bg-white w-full mt-1 rounded-lg shadow-md pl-3 py-4">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
