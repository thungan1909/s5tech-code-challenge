import { COINGECKO_ENDPOINTS } from "../constant/const";

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
  // const COIN_OVERRIDES: Record<string, string> = {
  //   bitcoin: "BTC",
  //   ethereum: "ETH",
  //   cosmos: "ATOM",
  //   kujira: "KUJI",
  //   osmosis: "OSMO",
  //   "usd-coin": "USDC",
  //   "wrapped-bitcoin": "WBTC",
  //   zilliqa: "ZIL",
  //   lunc: "LUNA",
  //   "terra-luna": "LUNA",
  // };

  // const mapped: TokenPrice[] = Object.keys(data).map((key) => ({
  //   currency: COIN_OVERRIDES[key] || key.toUpperCase(),
  //   price: data[key].usd,
  // }));

  // return mapped;
};
