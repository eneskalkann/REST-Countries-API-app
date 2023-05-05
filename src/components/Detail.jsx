import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Detail = () => {
  const { alpha3Code } = useParams();
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getCountryDetail = (alpha3Code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${alpha3Code}`)
      .then((response) => response.json())
      .then((data) => setDetail(data))
      .catch((error) => setError(error.message));
    setLoading(false);
  };

  useEffect(() => {
    getCountryDetail(alpha3Code);
  }, [alpha3Code]);

  return (
    <div className="grid grid-cols-12 mt-12">
      {loading ? (
        <div class="animate-pulse col-span-12">
          <div className="justify-between block col-span-12 py-12 space-y-10 md:space-y-0 md:gap-3 md:flex">
            <div class="px-6 py-3 md:px-8 md:py-[14px] bg-darkGray rounded-md mb-4"></div>
          </div>
          <div className="flex col-span-12 gap-5">
            <div className="flex items-center justify-center w-full h-48 mb-4 rounded bg-lightGray md:w-4/5">
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
            <div>
              <div className="w-32 h-5 mb-4 rounded-full bg-darkGray"></div>
              <div className="h-2.5 bg-darkGray rounded-full w-96 mb-4"></div>
              <div className="h-2 bg-darkGray rounded-full w-96 mb-2.5"></div>
              <div className="h-2.5 bg-darkGray rounded-full w-96 mb-4"></div>
              <div className="h-2 bg-darkGray rounded-full w-96 mb-2.5"></div>
              <div className="h-2.5 bg-darkGray rounded-full w-96 mb-4"></div>
              <div className="h-2 bg-darkGray rounded-full w-96 mb-2.5"></div>
            </div>
            <div>
              <div className="h-2.5 bg-darkGray rounded-full w-96 mb-4"></div>
              <div className="h-2 bg-darkGray rounded-full w-96 mb-2.5"></div>
              <div className="h-2.5 bg-darkGray rounded-full w-96 mb-4"></div>
              <div className="h-2 bg-darkGray rounded-full w-96 mb-2.5"></div>
              <div className="h-2.5 bg-darkGray rounded-full w-96 mb-4"></div>
              <div className="h-2 bg-darkGray rounded-full w-96 mb-2.5"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="col-span-12">
            <Link
              to="/"
              className="inline-flex items-center justify-between gap-3 px-6 py-3 md:px-8 md:py-[14px] bg-white rounded-md shadow-lg text-darkBlue"
            >
              <IoIosArrowRoundBack size={24} />
              Back
            </Link>
          </div>
          {detail?.map((detail, index) => (
            <div
              key={index}
              className="grid grid-cols-12 col-span-12 mt-10 mb-10 md:mb-0"
            >
              <div className="col-span-12 md:col-span-6">
                <img
                  src={detail.flags.svg}
                  alt={detail.name.common}
                  className="object-cover w-full md:w-4/5"
                />
              </div>
              <div className="hidden md:col-span-1"></div>
              <div className="flex flex-col justify-between col-span-12 space-y-8 md:col-span-6 whitespace-nowrap">
                <h3 className="mt-5 text-2xl font-bold text-veryDarkBlueText md:mt-0">
                  {detail.name.common}
                </h3>
                <div className="flex flex-col gap-10 md:gap-20 md:flex-row">
                  <div className="space-y-2">
                    <p className="flex gap-1 font-semibold w-72 whitespace-nowrap text-veryDarkBlueText">
                      Native Name:
                      <span className="font-light md:whitespace-pre-wrap">
                        {detail.name.official}
                      </span>
                    </p>
                    <p className="flex gap-1 font-semibold text-veryDarkBlueText">
                      Population:
                      <span className="font-light ">{detail.population}</span>
                    </p>
                    <p className="flex gap-1 font-semibold text-veryDarkBlueText">
                      Region:
                      <span className="font-light ">{detail.region}</span>
                    </p>
                    <p className="flex gap-1 font-semibold text-veryDarkBlueText">
                      Sub Region:
                      <span className="font-light ">{detail.subregion}</span>
                    </p>
                    <p className="flex gap-1 font-semibold text-veryDarkBlueText">
                      Capital:
                      <span className="font-light ">{detail.capital}</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex gap-1 font-semibold text-veryDarkBlueText">
                      Top Level Domain:
                      <span className="font-light ">{detail.tld}</span>
                    </p>
                    <p className="flex gap-1 font-semibold text-veryDarkBlueText">
                      Currencies:
                      <span className="font-light ">
                        {detail && Object.values(detail.currencies)[0].name}
                      </span>
                    </p>
                    <p className="flex gap-1 font-semibold text-veryDarkBlueText">
                      Languages:
                      <span className="font-light ">
                        {detail && detail.languages && (
                          <>
                            {Object.values(detail.languages)[0]}
                            {Object.values(detail.languages)[1] &&
                              `, ${Object.values(detail.languages)[1]}`}
                          </>
                        )}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="font-semibold text-veryDarkBlueText">
                    Borders:
                  </p>
                  <div className="flex gap-3">
                    {detail && detail.borders ? (
                      detail.borders.map((border, index) => (
                        <div
                          key={index}
                          className="flex justify-center w-[200px] px-2 bg-white border rounded shadow-md border-darkGray border-opacity-30"
                        >
                          <span className="font-light">{border}</span>
                        </div>
                      ))
                    ) : (
                      <span className="font-light">None</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Detail;
