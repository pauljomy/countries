import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
import CountriesList from "@/components/CountriesList";
import { useState } from "react"; // remove useEffect
import countryList from "./data.json";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // remove countries state

  const filteredCountries = countryList.filter((country) =>
    country.name.toLowerCase().trim().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <NavBar />
      <div className="md:grid place-items-center">
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CountriesList countries={filteredCountries} />{" "}
        {/* use filteredCountries here */}
      </div>
    </div>
  );
};

export default App;
