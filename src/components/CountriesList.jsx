import React from "react";
import SingleCountry from "./SingleCountry";

const CountriesList = ({ countries }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 gap-12 sm:mx-12 lg:grid-cols-4 max-w-318 place-items-center">
      {countries.map((country) => (
        <SingleCountry key={country.name} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
