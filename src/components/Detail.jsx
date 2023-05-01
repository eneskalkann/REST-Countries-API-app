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
    <div className="grid grid-cols-12 space-y-20">
      <div className="col-span-12">
        <Link
          to="/"
          className="inline-flex items-center justify-between gap-3 px-8 py-2 bg-white rounded-md shadow-lg text-darkBlue"
        >
          <IoIosArrowRoundBack size={24} />
          Back
        </Link>
      </div>
      {detail?.map((detail, index) => (
        <div key={index} className="grid grid-cols-11 col-span-11">
          <div className="col-span-5">
            <img src={detail.flags.svg} alt={detail.name.common} />
          </div>
          <div className="col-span-1"></div>
          <div className="flex flex-col justify-between col-span-5 space-y-8 whitespace-nowrap">
            <h3 className="text-2xl font-bold text-veryDarkBlueText">
              {detail.name.common}
            </h3>
            <div className="flex flex-col gap-20 md:flex-row">
              <div className="space-y-2">
                <p className="flex gap-1 font-semibold text-veryDarkBlueText">
                  Native Name:
                  <span className="font-light ">{detail.name.official}</span>
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
              <div>
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
                    {detail &&
                      Object.values(detail.languages)[0] +
                        ", " +
                        Object.values(detail.languages)[1]}
                  </span>
                </p>
              </div>
            </div>
            <p className="font-semibold text-veryDarkBlueText">
              Borders: <span className="font-light">{}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detail;
