import React from "react";

interface Props {
  amount: number;
  usdValue: number;
  formattedAmount: string;
  className?: string;
}

const WalletRow: React.FC<Props> = ({
  amount,
  usdValue,
  formattedAmount,
  className,
}) => {
  console.log(amount);
  return (
    <div className={className}>
      <span>{formattedAmount}</span>
      <span>${usdValue.toFixed(2)}</span>
    </div>
  );
};

export default WalletRow;
