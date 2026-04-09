import { Divide } from "lucide-react";
import { useTheme } from "@/context/themeToggler";

const Dropdown = () => {
  const { isDark } = useTheme();

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="mb-6 ">
      <select
        className={`p-3 w-50 h-12  border-none outline-none shadow-[0_2px_12px_4px_rgba(0,0,0,0.03)] rounded-sm ${isDark ? "bg-component-bg" : " "}`}
      >
        {regions.map((region) => {
          return (
            <option key={region} value={region} className="outline-none">
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
