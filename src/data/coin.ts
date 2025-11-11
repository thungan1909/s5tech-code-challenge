// export interface CoinInfo {
//   id: string;
//   symbol: string;
//   name: string;
// }

// export const fetchCoinList = async (): Promise<CoinInfo[]> => {
//   const res = await fetch("https://api.coingecko.com/api/v3/coins/list");
//   const data: CoinInfo[] = await res.json();
//   return data;
// };

// export const buildCoinMap = (coins: CoinInfo[]): Record<string, string> => {
//   const map: Record<string, string> = {};
//   coins.forEach((coin) => {
//     map[coin.id] = coin.symbol.toUpperCase(); // BTC, ETH, ...
//   });
//   return map;
// };
