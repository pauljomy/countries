import React from "react";
import { Sun, Moon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex justify-between mb-4 py-6 px-5 items-center shadow-[0_2px_12px_4px_rgba(0,0,0,0.04)] w-full ">
      <span className="font-bold">Where in the world?</span>
      <div className="flex gap-2 items-center">
        <Moon size={20} />
        <span className="text-sm font-medium">Dark Mode</span>
      </div>
    </div>
  );
};

export default NavBar;
