import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const datas = await res.json();
      setData(datas);
      setLoading(false);
      console.log(loading);
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
      setLoading(false);
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
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-12 mb-5">
      {loading ? (
        <div class="animate-pulse col-span-12">
          <div className="justify-between block col-span-12 py-12 space-y-10 md:space-y-0 md:gap-3 md:flex">
            <div class="h-10 w-full md:w-[478px] bg-darkGray rounded-md mb-4"></div>
            <div class="h-10 w-full md:w-[178px] bg-darkGray rounded-md mb-4"></div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
              >
                <div className="col-span-12 gap-5">
                  <div className="flex items-center justify-center h-48 mb-4 rounded bg-lightGray">
                    <svg
                      className="w-12 h-12 text-darkGray"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>
                  <div className="h-2.5 bg-darkGray rounded-full w-24 mb-4"></div>
                  <div className="h-2 bg-darkGray rounded-full mb-2.5"></div>
                  <div className="h-2 bg-darkGray rounded-full mb-2.5"></div>
                </div>
              </div>
            ))}
          </div>

          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div className="justify-between block col-span-12 py-12 space-y-10 md:space-y-0 md:gap-3 md:flex">
            <Search onSearch={getCountry} />
            <Filter onFilter={getRegion} />
          </div>
          <div className="grid grid-cols-12 col-span-12 gap-5 md:gap-10">
            {data &&
              data.map((data, index) => (
                <Link
                  to={`/country/${data.ccn3}`}
                  className="w-full col-span-12 gap-5 scroll-smooth md:gap-10 md:col-span-6 lg:col-span-4 xl:col-span-3"
                >
                  <div key={index}>
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
                </Link>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
