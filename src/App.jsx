import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
import CountriesList from "@/components/CountriesList";
import { useState } from "react";

import Dropdown from "@/components/DropDown";
import useSearch from "@/api/useSearch";

import { useTheme } from "@/context/themeToggler";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("");
  const { isDark } = useTheme();

  const { results, loading } = useSearch(searchTerm);

  const filteredCountries = (Array.isArray(results) ? results : []).filter(
    (country) => (selected ? country.region === selected : true),
  );

  const noResults = () => {
    if (filteredCountries.length == 0) {
      return <div className="mt-40 text-slate-400">No countries found.</div>;
    }
  };

  return (
    <div className={`${isDark ? "bg-background text-white" : ""} min-h-screen`}>
      <NavBar />
      <div className="md:flex justify-between max-w-7xl items-center mx-auto md:px-14 px-5 gap-8">
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Dropdown selected={selected} setSelected={setSelected} />
      </div>
      <div className="md:grid place-items-center">
        {loading ? (
          <div className="mt-40 text-slate-400 ">Loading...</div>
        ) : (
          noResults() || <CountriesList countries={filteredCountries} />
        )}
      </div>
    </div>
  );
};

export default App;
