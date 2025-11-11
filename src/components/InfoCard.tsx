// src/components/InfoCard.tsx
import React from "react";

export const InfoCard: React.FC = () => {
  return (
    <div className="bg-card p-4 rounded-xl text-sm text-gray-300 space-y-2">
      <h3 className="text-gray-400 mb-2 font-semibold">More Information</h3>
      <div className="flex justify-between">
        <span>Minimum Received</span>
        <span className="text-white font-medium">5.0 USD</span>
      </div>
      <div className="flex justify-between">
        <span>Gas Fee</span>
        <span className="text-white font-medium">$16.34</span>
      </div>
      <div className="flex justify-between">
        <span>Price Impact</span>
        <span className="text-white font-medium">&lt; 0.01%</span>
      </div>
    </div>
  );
};
