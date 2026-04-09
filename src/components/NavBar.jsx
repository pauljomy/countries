import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/themeToggler";

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`flex justify-between mb-4 md:mb-8  py-6 px-5 items-center shadow-[0_2px_12px_4px_rgba(0,0,0,0.04)] lg:px-20 ${isDark ? "bg-component-bg" : ""}`}
    >
      <span className="font-bold md:text-2xl">Where in the world?</span>
      <div
        className="flex gap-2 justify-center items-center md:text-xl cursor-pointer"
        onClick={toggleTheme}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
        <span className="text-sm md:text-[18px] font-medium">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
