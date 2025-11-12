import type { TokenPrice } from "../api/price.api";
import { COINGECKO_ENDPOINTS } from "../constant/const";
import type { Coin } from "../types/coin";

export const fetchPricesByIds = async (
  ids: string[],
  coinList: Coin[]
): Promise<TokenPrice[]> => {
  if (ids.length === 0) return [];

  const idToSymbolMap = coinList.reduce<Record<string, string>>((acc, c) => {
    acc[c.id] = c.symbol.toUpperCase();
    return acc;
  }, {});

  const url = `${COINGECKO_ENDPOINTS.simplePrice}?ids=${ids.join(
    ","
  )}&vs_currencies=usd`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch prices: ${res.status}`);
  const data = await res.json();

  return ids
    .map((id) => {
      const symbol = idToSymbolMap[id];
      const priceData = data[id];
      if (!symbol || !priceData) return null;

      return { currency: symbol, price: priceData.usd };
    })
    .filter((x): x is TokenPrice => x !== null);
};
