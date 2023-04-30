import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Search from "./Search";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const datas = await res.json();
      setData(datas);
    } catch (err) {
      setError(err.message);
    }
  };

  const getCountry = async (country) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const datas = await res.json();
      setData(datas);
    } catch (err) {
      setError(err.message);
    }
  };

  const getRegion = async (region) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const datas = await res.json();
      setData(datas);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="flex justify-between col-span-12 py-12">
        <Search onSearch={getCountry} />
        <Filter onFilter={getRegion} />
      </div>
      <div className="grid grid-cols-12 col-span-12 gap-10">
        {data &&
          data.map((data, index) => (
            <div
              key={index}
              className="col-span-12 gap-10 md:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              <div className="cursor-pointer bg-white rounded-lg h-[402px] shadow-md">
                <img
                  src={data.flags.svg}
                  className="rounded-t-lg object-cover h-[201px] w-full"
                  alt=""
                />
                <h4 className="my-5 ml-6 text-xl font-semibold">
                  {data.name.common}
                </h4>
                <div className="flex flex-col gap-1 ml-6">
                  <p className="flex gap-1">
                    <span className="font-semibold">Population:</span>
                    {data.population}
                  </p>
                  <p className="flex gap-1">
                    <span className="font-semibold">Region:</span>
                    {data.region}
                  </p>
                  <p className="flex gap-1">
                    <span className="font-semibold">Capital:</span>
                    {data.capital}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
