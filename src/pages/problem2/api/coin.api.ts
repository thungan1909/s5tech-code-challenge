import { COINGECKO_ENDPOINTS } from "../const";
import type { Coin } from "../types/coin";

export const fetchCoinList = async () => {
  const url = `${COINGECKO_ENDPOINTS.markets}?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

  const data = await res.json();

  return data.map((c: Coin) => ({
    id: c.id,
    symbol: c.symbol,
    name: c.name,
    image: c.image,
    current_price: c.current_price,
  }));
};
