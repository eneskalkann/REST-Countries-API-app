import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";



function Filter() {
  const [region,setRegion] = useState("")
  const [countrires,setCountries] = useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => res.json())
      .then((region) => {
        setCountries(region);
        console.log("region", region);
      })
      .catch((err) => console.log(err));
  }, [region]);

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };
  
  return (
    <div className="flex items-center justify-between my-8">
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
      <div className="relative transition-all bg-white group">
        {/* <div className="flex items-center justify-between px-3 py-3 rounded-lg shadow-md cursor-pointer gap-9">
          <span>Filter By Religion</span>
          <MdKeyboardArrowDown />
        </div> */}
        <label>
        Choose a region:
        <select value={region} onChange={handleRegionChange}>
          <option value="europe">Europe</option>
          <option value="asia">Asia</option>
          <option value="americas">Americas</option>
          <option value="africa">Africa</option>
          <option value="oceania">Oceania</option>
        </select>
      </label>
      {Array.isArray(countrires) &&
        countrires.map((item, index) => {
          return (
            <div
              key={index}
              className="col-span-12  md:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              <div className=" cursor-pointer bg-white rounded-lg h-[402px] shadow-md">
                <img
                  src={item.flags.svg}
                  className=" rounded-t-lg object-cover h-[201px] w-full"
                />
                <h4 className="my-5 ml-6 text-xl font-semibold">
                  {item.name.common}
                </h4>
                <div className="flex flex-col gap-1 ml-6 ">
                  <p className="flex gap-1 ">
                    <span className="font-semibold ">Population:</span>
                    {item.population}
                  </p>
                  <p className="flex gap-1 ">
                    <span className="font-semibold ">Region:</span>
                    {item.region}
                  </p>
                  <p className="flex gap-1 ">
                    <span className="font-semibold ">Capital:</span>
                    {item.capital}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
