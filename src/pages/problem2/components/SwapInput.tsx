// src/components/SwapInput.tsx
import React from "react";
import { CurrencySelect } from "./CurrencySelect";
import type { Currency } from "../types/currency";

interface SwapInputProps {
  label: string;
  amount: string;
  onAmountChange?: (val: string) => void;
  currency: string;
  onCurrencyChange?: (val: string) => void;
  usd?: string;
  options?: Currency[];
}

export const SwapInput: React.FC<SwapInputProps> = ({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  usd,
  options = [],
}) => {
  return (
    <div className="bg-gray-900 p-3 rounded-xl space-y-1">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange?.(e.target.value)}
          className="flex-1 bg-transparent text-white text-lg font-semibold outline-none"
        />
        <div className="w-32">
          <CurrencySelect
            value={currency}
            options={options}
            onChange={(val) => onCurrencyChange?.(val)}
          />
        </div>
      </div>
      {usd && <div className="text-xs text-gray-500">{usd}</div>}
    </div>
  );
};
