import { Search } from "lucide-react";
import { useTheme } from "@/context/themeToggler";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  const { isDark } = useTheme();

  return (
    <div className={`relative mb-6 flex-1 ${isDark ? "bg-component-bg" : ""}`}>
      <input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a country..."
        className=" h-12 shadow-[0_2px_12px_4px_rgba(0,0,0,0.03)] rounded-sm px-15 text-sm md:text-[1em] outline-none w-full"
      />
      <Search
        size={20}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 text-slate-300"
      />
    </div>
  );
};

export default SearchBox;
