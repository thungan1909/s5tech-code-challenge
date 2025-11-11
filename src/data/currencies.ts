// export interface CoinInfo {
//   id: string;
//   symbol: string;
//   name: string;
// }

// export interface TokenPrice {
//   currency: string; // code như BTC, ETH, LUNA…
//   price: number; // USD
// }

// export interface FiatRate {
//   code: string;
//   rate: number; // so với USD
// }

// // Lấy danh sách tất cả coin từ Coingecko
// export const fetchCoinList = async (): Promise<CoinInfo[]> => {
//   const res = await fetch("https://api.coingecko.com/api/v3/coins/list");
//   const data: CoinInfo[] = await res.json();
//   return data;
// };

// // Lấy giá crypto từ Coingecko theo danh sách ids
// export const fetchPrices = async (ids: string[]): Promise<TokenPrice[]> => {
//   const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(
//     ","
//   )}&vs_currencies=usd`;
//   const res = await fetch(url);
//   const data = await res.json();

//   // Map api id → symbol uppercase
//   const COIN_OVERRIDES: Record<string, string> = {
//     lunc: "LUNA",
//     "terra-luna": "LUNA",
//     "usd-coin": "USDC",
//     "wrapped-bitcoin": "WBTC",
//   };

//   return Object.keys(data).map((key) => ({
//     currency: COIN_OVERRIDES[key] || key.toUpperCase(),
//     price: data[key].usd,
//   }));
// };

// // Lấy tỉ giá fiat từ exchangerate.host
// export const fetchFiatRates = async (): Promise<FiatRate[]> => {
//   const res = await fetch("https://api.exchangerate.host/latest?base=USD");
//   const data = await res.json();
//   return Object.entries(data.rates).map(([code, rate]) => ({
//     code,
//     rate: Number(rate),
//   }));
// };
