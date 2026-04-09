import React from "react";
import { useTheme } from "@/context/themeToggler";

const SingleCountry = ({ country }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`max-sm:mx-12 h-90 rounded-md shadow-[0_2px_12px_4px_rgba(0,0,0,0.09)] overflow-hidden mb-10 ${isDark ? "bg-component-bg" : ""}`}
    >
      <img
        src={country.flags.svg}
        alt={country.name}
        className="w-105 h-40 object-cover"
      />
      <div className="p-5 mb-8 ">
        <h2 className="text-xl font-bold mb-4">{country.name}</h2>
        <p className="mb-1">
          <span className="font-bold text-[0.975rem] ">Population: </span>
          {country.population.toLocaleString()}
        </p>
        <p className="mb-1">
          <span className="font-bold">Region:</span> {country.region}
        </p>
        <p className="mb-1">
          <span className="font-bold">Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default SingleCountry;
