import { COINGECKO_ENDPOINTS } from "../const";

export interface TokenPrice {
  currency: string;
  price: number; // USD
}

export const fetchPrices = async (ids: string[]): Promise<TokenPrice[]> => {
  const url = `${COINGECKO_ENDPOINTS.simplePrice}?ids=${ids.join(
    ","
  )}&vs_currencies=usd`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch prices: ${res.status}`);

  const data = await res.json();
  return Object.entries(data).map(([id, value]: [string, any]) => ({
    currency: id.toUpperCase(),
    price: value.usd,
  }));
};
