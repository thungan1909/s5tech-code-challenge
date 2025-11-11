// src/components/ToggleTabs.tsx
import React from "react";

interface Props {
  mode: "crypto" | "fiat";
  setMode: (value: "crypto" | "fiat") => void;
}

export const ToggleTabs: React.FC<Props> = ({ mode, setMode }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-sm mb-2">
      <span className="text-gray-400">Swap to:</span>
      <button
        onClick={() => setMode("crypto")}
        className={`px-4 py-1 rounded-lg font-semibold transition ${
          mode === "crypto"
            ? "bg-primary text-black"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        Crypto
      </button>
      <button
        onClick={() => setMode("fiat")}
        className={`px-4 py-1 rounded-lg font-semibold transition ${
          mode === "fiat"
            ? "bg-primary text-black"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        Fiat
      </button>
    </div>
  );
};
