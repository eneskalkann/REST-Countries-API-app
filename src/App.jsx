import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [data, setData] = useState();
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false)
        console.log("data", data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SkeletonTheme baseColor="#b3b2b2" highlightColor="#e4e2e2">
      <div className="grid grid-cols-12 gap-10">
        {loading ? (
          <>
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
            > 
              <div className="gap-10">
                <Skeleton height={201} />
                <Skeleton height={28} width={220} className="mt-4 ml-6" />
                <div className="my-5 ml-6">
                  <Skeleton height={14} width={180} />
                  <Skeleton height={14} width={180} />
                  <Skeleton height={14} width={180} />
                </div>
              </div>
            </div>
          ))}
        </>
        ) : (
          <>
            {Array.isArray(data) &&
              data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
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
          </>
        )}
      </div>
    </SkeletonTheme>
  );

}

export default App;
