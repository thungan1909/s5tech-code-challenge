import React, { useMemo } from "react";

import useWalletBalances from "./hooks/useWalletBalances";
import { usePrices } from "./hooks/usePrices";
import WalletRow from "./WalletRow";
import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";

// [Refactor 1] Added `blockchain` and defined Blockchain type
// Reason: Used in getPriority() and sorting logic.
type Blockchain =
  | "Osmosis"
  | "Ethereum"
  | "Arbitrum"
  | "Zilliqa"
  | "Neo"
  | string;

interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: Blockchain; // added
}

// [Refactor 2] Use inheritance to avoid duplication
// Reason: FormattedWalletBalance extends WalletBalance for cleaner structure.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}

// [Refactor 3] Moved getPriority() outside component
// Reason: It doesn't depend on props/state — avoids re-creation on every render.
const getPriority = (blockchain: Blockchain): number => {
  switch (blockchain) {
    case "Osmosis":
      return 100;
    case "Ethereum":
      return 50;
    case "Arbitrum":
      return 30;
    case "Zilliqa": //Have same the return value
    case "Neo":
      return 20;
    default:
      return -99; // unsupported chain
  }
};

// [Refactor 4]: Use BoxProps directly instead of creating empty interface
// Reason: Avoids @typescript-eslint/no-empty-object-type and keeps code cleaner
const WalletPage: React.FC<BoxProps> = (props) => {
  // [Optional]: children not used, but destructuring included for clarity
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  // [Refactor 5] Filter and sort balances correctly
  // Reason: Fix undefined variable (lhsPriority),
  // only include valid blockchains and positive amounts.
  const sortedBalances = useMemo(() => {
    return balances
      .filter((b) => getPriority(b.blockchain) > -99 && b.amount > 0)
      .sort((a, b) => getPriority(b.blockchain) - getPriority(a.blockchain));
  }, [balances]); // [Refactor 6] Removed unnecessary dependency (prices)

  // [Refactor 6] Combined formatting & rendering for simplicity
  // Reason: Avoid extra map() and ensure formatted amount is correct.
  const rows = sortedBalances.map((balance) => {
    const formatted = balance.amount.toFixed(2); // added precision
    const usdValue = prices[balance.currency] * balance.amount;

    return (
      <WalletRow
        key={balance.currency} // [Refactor 7] use currency as key instead of index
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={formatted}
      />
    );
  });

  // Refactor 8: Clean minimal render
  // Reason: Removed unnecessary wrapper logic
  return <Box {...rest}>{rows}</Box>; // MUI Box fixes type issues
};

export default WalletPage;
