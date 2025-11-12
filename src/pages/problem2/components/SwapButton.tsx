import React, { useState } from "react";

export const SwapButton: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    alert("Swap completed successfully!");
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`w-full py-3 mt-2 rounded-xl font-bold transition ${
        loading
          ? "bg-gray-600 text-gray-300 cursor-not-allowed"
          : "bg-green-800 text-black hover:bg-green-400"
      }`}
    >
      {loading ? "Swapping..." : "SWAP"}
    </button>
  );
};
