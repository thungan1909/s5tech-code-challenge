export default function useWalletBalances() {
  // mock data
  return [
    { currency: "ETH", amount: 2.5, blockchain: "Ethereum" },
    { currency: "OSMO", amount: 100, blockchain: "Osmosis" },
    { currency: "BTC", amount: 0.1, blockchain: "Neo" },
  ];
}
