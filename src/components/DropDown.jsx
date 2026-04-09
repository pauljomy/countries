import { Divide } from "lucide-react";

const Dropdown = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="px-5 mb-6">
      <select className="p-3 w-50 h-12 bg-white border-none outline-none shadow-[0_2px_12px_4px_rgba(0,0,0,0.03)] rounded-sm">
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
