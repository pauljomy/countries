import { Divide } from "lucide-react";
import { useTheme } from "@/context/themeToggler";

const Dropdown = ({ selected, setSelected }) => {
  const { isDark } = useTheme();

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="mb-6 ">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className={`p-3 w-48 h-12  border-none outline-none shadow-[0_2px_12px_4px_rgba(0,0,0,0.03)] rounded-sm ${isDark ? "bg-component-bg" : " "}  cursor-pointer`}
      >
        <option value="" disabled selected hidden>
          Filter by Region
        </option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
