import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Detail = () => {
  const { alpha3Code } = useParams();
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState("");

  const getCountryDetail = (alpha3Code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${alpha3Code}`)
      .then((response) => response.json())
      .then((data) => setDetail(data))
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    getCountryDetail(alpha3Code);
  }, [alpha3Code]);

  if (error) {
    return <div>There was an error: {error}</div>;
  }

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-12 mt-12">
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
              <p className="font-semibold text-veryDarkBlueText">Borders:</p>
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
    </div>
  );
};

export default Detail;
