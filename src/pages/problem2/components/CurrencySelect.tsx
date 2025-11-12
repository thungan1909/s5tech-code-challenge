import React, { useState } from "react";
import type { Currency } from "./SwapForm";

interface SwapSelectProps {
  value: string;
  options: Currency[];
  onChange: (value: string) => void;
}

export const CurrencySelect: React.FC<SwapSelectProps> = ({
  value,
  options,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const selected = options.find((opt) => opt.code === value);

  return (
    <div className="relative w-full">
      {/* Selected option */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between bg-gray-800 text-white text-sm rounded-xl px-3 py-2 w-full hover:bg-gray-700 transition"
      >
        <div className="flex items-center gap-2">
          {selected?.icon && (
            <img
              src={selected.icon}
              alt={selected.code}
              className="w-5 h-5 rounded-full"
            />
          )}
          <span>{selected?.code}</span>
        </div>
        <span>▾</span>
      </button>

      {/* Dropdown list */}
      {open && (
        <div className="absolute mt-1 w-full bg-gray-800 rounded-xl shadow-lg max-h-60 overflow-y-auto z-10">
          {options.map((opt) => (
            <div
              key={opt.code}
              onClick={() => {
                onChange(opt.code);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 cursor-pointer"
            >
              {opt.icon && (
                <img
                  src={opt.icon}
                  alt={opt.code}
                  className="w-5 h-5 rounded-full"
                />
              )}
              <span>{opt.code}</span>
              {opt.name && (
                <span className="text-gray-400 text-xs">– {opt.name}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
