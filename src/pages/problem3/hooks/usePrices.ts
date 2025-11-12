type Prices = Record<string, number>;

export const usePrices = (): Prices => {
  return {
    ETH: 3200,
    OSMO: 0.8,
    BTC: 68000,
  };
};
