import { useState } from "react";
import { formatPrice } from "../utils/index.jsx";

const FormRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className="fieldset">
      <label
        htmlFor={name}
        className="label cursor-pointer flex justify-between pr-2"
      >
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        className={`range range-primary w-full ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span className="font-bold text-md">{formatPrice(0)}</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
