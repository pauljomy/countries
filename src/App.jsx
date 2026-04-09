import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
import CountriesList from "@/components/CountriesList";
import { useState } from "react";
import countryList from "./data.json";

const App = () => {
  const [countries, setCountries] = useState(countryList);

  return (
    <div className="">
      <NavBar />
      <SearchBox />
      <CountriesList countries={countries} />
    </div>
  );
};

export default App;
