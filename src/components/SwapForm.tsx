import React, { useEffect, useState } from "react";
import { SwapInput } from "./SwapInput";
import { ToggleTabs } from "./ToggleTabs";
import { SwapButton } from "./SwapButton";
import { fetchCoinList, fetchPrices, type TokenPrice } from "../data/new-price";

export interface Currency {
  code: string;
  name: string;
  icon: string;
  type: "crypto" | "fiat";
}

// Danh sách coin bạn muốn hiển thị dropdown
const CRYPTO_IDS = [
  "bitcoin",
  "ethereum",
  "cosmos",
  "lunc",
  "osmosis",
  "zilliqa",
  "usd-coin",
  "wrapped-bitcoin",
  "kujira",
];

export const SwapForm: React.FC = () => {
  const [mode, setMode] = useState<"crypto" | "fiat">("crypto");
  const [fromCurrency, setFromCurrency] = useState("ETH");
  const [toCurrency, setToCurrency] = useState("BTC");
  const [amount, setAmount] = useState("1");
  const [converted, setConverted] = useState("0");
  const [exchangeRate, setExchangeRate] = useState<number>(0);

  const [cryptoCurrencies, setCryptoCurrencies] = useState<Currency[]>([]);

  const [cryptoPrices, setCryptoPrices] = useState<TokenPrice[]>([]);
  //   const [fiatRates, setFiatRates] = useState<FiatRate[]>([]);

  // Load crypto & fiat dropdown dynamically
  useEffect(() => {
    const loadDropdowns = async () => {
      try {
        // Crypto
        const coinList = await fetchCoinList();
        const COIN_OVERRIDES: Record<string, string> = {
          lunc: "LUNA",
          "terra-luna": "LUNA",
          "usd-coin": "USDC",
          "wrapped-bitcoin": "WBTC",
        };
        const cryptoList: Currency[] = coinList
          .filter((c) => CRYPTO_IDS.includes(c.id))
          .map((c) => ({
            code: COIN_OVERRIDES[c.id] || c.symbol.toUpperCase(),
            name: c.name,
            icon: "🪙",
            type: "crypto",
          }));
        setCryptoCurrencies(cryptoList);

        // Fiat
      } catch (err) {
        console.error(err);
      }
    };
    loadDropdowns();
  }, []);

  // Load crypto prices
  useEffect(() => {
    const loadPrices = async () => {
      try {
        const prices = await fetchPrices(CRYPTO_IDS);
        setCryptoPrices(prices);
      } catch (err) {
        console.error(err);
      }
    };
    loadPrices();
  }, []);

  // Compute conversion
  useEffect(() => {
    console.log(fromCurrency, toCurrency);
    console.log(cryptoPrices);
    console.log(cryptoPrices.find((p) => p.currency === fromCurrency));
    console.log(cryptoPrices.find((p) => p.currency === toCurrency));
    if (mode === "crypto" && cryptoPrices.length > 0) {
      const from = cryptoPrices.find((p) => p.currency === fromCurrency)?.price;

      const to = cryptoPrices.find((p) => p.currency === toCurrency)?.price;
      if (from && to) {
        const rate = from / to;
        setExchangeRate(rate);
        setConverted((Number(amount) * rate).toFixed(6));
      } else {
        setConverted("0");
      }
    }
  }, [fromCurrency, toCurrency, amount, cryptoPrices, mode]);

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const currencyOptions =
    mode === "crypto" ? cryptoCurrencies : cryptoCurrencies; //tODO

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white rounded-2xl p-6 shadow-lg space-y-4">
      <ToggleTabs mode={mode} setMode={setMode} />

      <div className="bg-gray-800 rounded-xl p-3 text-gray-400 text-sm">
        <input
          type="text"
          placeholder='Try typing "10 ETH to BTC"'
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="bg-gray-800 p-4 rounded-xl space-y-4">
        <SwapInput
          label="From"
          amount={amount}
          onAmountChange={(val) => setAmount(val)}
          currency={fromCurrency}
          onCurrencyChange={(val) => setFromCurrency(val.toUpperCase())}
          options={currencyOptions}
        />

        <div className="flex justify-center">
          <button
            onClick={handleSwap}
            className="rounded-full bg-gray-700 p-2 hover:bg-gray-600 transition"
          >
            ⇅
          </button>
        </div>

        <SwapInput
          label="To"
          amount={converted}
          currency={toCurrency}
          onCurrencyChange={(val) => setToCurrency(val.toUpperCase())}
          options={currencyOptions}
        />
      </div>

      <SwapButton />
    </div>
  );
};
