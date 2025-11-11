// // // src/data/prices.ts

// import { buildCoinMap, fetchCoinList } from "./coin";

// // export interface TokenPrice {
// //   currency: string;
// //   price: number;
// // }

// // // Simplified subset from your dataset (you can add all entries if you wish)
// // export const PRICES: TokenPrice[] = [
// //   { currency: "USD", price: 1 },
// //   { currency: "USDC", price: 1 },
// //   { currency: "ETH", price: 1645.9337 },
// //   { currency: "WBTC", price: 26002.822 },
// //   { currency: "BUSD", price: 0.9998 },
// //   { currency: "ATOM", price: 7.1866 },
// //   { currency: "OSMO", price: 0.3773 },
// //   { currency: "LUNA", price: 0.4096 },
// //   { currency: "KUJI", price: 0.675 },
// //   { currency: "ZIL", price: 0.0165 },
// // ];

// // // Optional helper for lookup
// // export const getPrice = (symbol: string): number | undefined => {
// //   const token = PRICES.find((t) => t.currency === symbol);
// //   console.log(token, "syllll", symbol);
// //   return token ? token.price : undefined;
// // };
// export interface TokenPrice {
//   currency: string; // BTC, ETH ...
//   price: number; // USD
// }

// export const fetchPrices = async (ids: string[]): Promise<TokenPrice[]> => {
//   // Lấy danh sách coin
//   const coinList = await fetchCoinList();
//   const coinMap = buildCoinMap(coinList);

//   const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(
//     ","
//   )}&vs_currencies=usd`;
//   const res = await fetch(url);
//   const data = await res.json();

//   // Map về code ngắn
//   const mapped: TokenPrice[] = Object.keys(data).map((key) => ({
//     currency: coinMap[key] || key.toUpperCase(),
//     price: data[key].usd,
//   }));

//   // Add USD cho fiat reference
//   mapped.push({ currency: "USD", price: 1 });

//   return mapped;
// };
