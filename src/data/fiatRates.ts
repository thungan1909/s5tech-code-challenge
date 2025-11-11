// src/data/fiatRates.ts
export interface FiatRate {
  code: string;
  rate: number;
}

export const fetchFiatRates = async (): Promise<FiatRate[]> => {
  const res = await fetch("https://api.exchangerate.host/latest?base=USD");
  const data = await res.json();
  return Object.entries(data.rates).map(([code, rate]) => ({
    code,
    rate: Number(rate),
  }));
};
