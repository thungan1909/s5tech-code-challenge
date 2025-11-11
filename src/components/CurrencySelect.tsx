// src/components/CurrencySelect.tsx
import React from "react";

export interface Currency {
  code: string;
  name?: string;
  icon?: string; // Optional image path or emoji
}

interface Props {
  value: string;
  options: Currency[];
  onChange: (value: string) => void;
}

export const CurrencySelect: React.FC<Props> = ({
  value,
  options,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-800 text-white text-sm rounded-xl px-3 py-2 outline-none hover:bg-gray-700 transition w-full"
    >
      {options.map((opt) => (
        <option key={opt.code} value={opt.code}>
          {opt.icon ? `${opt.icon} ` : ""}
          {opt.code} {opt.name ? `- ${opt.name}` : ""}
        </option>
      ))}
    </select>
  );
};
