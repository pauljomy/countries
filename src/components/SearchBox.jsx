import React from "react";
import { useState } from "react";
import { Search } from "lucide-react";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="px-5 relative mb-10 max-w-120 ">
      <input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a country..."
        className=" h-12 shadow-[0_2px_12px_4px_rgba(0,0,0,0.03)] rounded-sm px-12 text-sm outline-none"
      />
      <Search
        size={20}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 text-slate-300"
      />
    </div>
  );
};

export default SearchBox;
