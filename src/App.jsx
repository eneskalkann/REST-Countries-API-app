import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("data", data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-12 gap-10">
      {Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className=" col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              <div className=" cursor-pointer bg-darkGray rounded-lg h-[402px]">
                <img src={item.flags.svg} className=" rounded-t-lg" />
                <h4 className="my-5 ml-6 text-xl font-semibold">
                  {item.name.common}
                </h4>
                <div className=" flex flex-col gap-1 ml-6">
                  <p className=" flex gap-1">
                    <span className=" font-semibold">Population:</span>
                    {item.population}
                  </p>
                  <p className=" flex gap-1">
                    <span className=" font-semibold">Region:</span>
                    {item.region}
                  </p>
                  <p className=" flex gap-1">
                    <span className=" font-semibold">Capital:</span>
                    {item.capital}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
