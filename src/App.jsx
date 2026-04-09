import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
import CountriesList from "@/components/CountriesList";
import { useState } from "react"; // remove useEffect
import countryList from "./data.json";
import Dropdown from "./components/DropDown";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);

  const filteredCountries = countryList.filter((country) =>
    country.name.toLowerCase().trim().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <NavBar />
      <div className="md:flex justify-between max-w-7xl items-center mx-auto">
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Dropdown />
      </div>
      <div className="md:grid place-items-center">
        <CountriesList countries={filteredCountries} />
      </div>
    </div>
  );
};

export default App;
