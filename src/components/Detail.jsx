import React from "react";
import { useParams } from "react-router-dom";

function Detail({ data }) {
  const { id } = useParams();
  const item = data[id];
  return (
    <div>
      <h1>{item.name.common}</h1>
      <p>Capital: {item.capital}</p>
      <p>Region: {item.region}</p>
      <p>Population: {item.population}</p>
    </div>
  );
}

export default Detail;
