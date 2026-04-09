import React from "react";
import { Sun, Moon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex justify-between mb-4 py-6 px-5 items-center shadow-[0_2px_12px_4px_rgba(0,0,0,0.04)] lg:px-83 ">
      <span className="font-bold md:text-2xl">Where in the world?</span>
      <div className="flex gap-2 justify-center items-center md:text-xl">
        <Moon size={20} />
        <span className="text-sm md:text-[18px] font-medium">Dark Mode</span>
      </div>
    </div>
  );
};

export default NavBar;
