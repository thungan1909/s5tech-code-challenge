import React, { useEffect, useState } from "react";

import { FaSpinner } from "react-icons/fa";
import type { TokenPrice } from "../../api/price.api";
import { fetchCoinList } from "../../api/coin.api";
import type { Coin } from "../../types/coin";
import { CRYPTO_IDS } from "../../constant/const";
import { SwapInput } from "./components/SwapInput";
import { SwapButton } from "./components/SwapButton";
import { fetchPricesByIds } from "../../utils/fetchPricesBySymbols";

export interface Currency {
  code: string;
  name: string;
  icon: string;
}

export const SwapForm: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState("ETH");
  const [toCurrency, setToCurrency] = useState("BTC");
  const [amount, setAmount] = useState("1");
  const [converted, setConverted] = useState("0");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loadingRate, setLoadingRate] = useState(false);

  const [currenciesDropdown, setCurrenciesDropdown] = useState<Currency[]>([]);
  const [cryptoPrices, setCryptoPrices] = useState<TokenPrice[]>([]);

  useEffect(() => {
    const loadCoinsAndPrices = async () => {
      try {
        const list: Coin[] = await fetchCoinList();

        const filtered = list
          .filter((c) => CRYPTO_IDS.includes(c.id))
          .map((c) => ({
            code: c.symbol.toUpperCase(),
            name: c.name,
            icon: c.image,
            type: "crypto" as const,
          }));
        setCurrenciesDropdown(filtered);

        const prices = await fetchPricesByIds(CRYPTO_IDS, list);
        setCryptoPrices(prices);
      } catch (err) {
        console.error(err);
      }
    };

    loadCoinsAndPrices();
  }, []);

  useEffect(() => {
    if (cryptoPrices.length > 0) {
      setLoadingRate(true);

      const from = cryptoPrices.find((p) => p.currency === fromCurrency)?.price;

      const to = cryptoPrices.find((p) => p.currency === toCurrency)?.price;
      if (from && to) {
        const rate = from / to;
        setExchangeRate(rate);
        setConverted((Number(amount) * rate).toFixed(6));
      } else {
        setExchangeRate(null);
        setConverted("0");
      }
      setLoadingRate(false);
    }
  }, [fromCurrency, toCurrency, amount, cryptoPrices]);

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="bg-gray-900 max-w-5xl rounded-3xl shadow-2xl p-8">
      <h1 className="text-2xl font-bold mb-2 text-green-400 text-center">
        Fancy Currency Swap
      </h1>
      <p className="text-sm text-slate-300 mb-6">
        Swap tokens quickly — prices are mocked/fetched; submission simulated.
      </p>
      <div className="max-w-md mx-auto bg-gray-900 text-white rounded-2xl p-6 shadow-lg space-y-4">
        <div className="bg-gray-800 p-4 rounded-xl space-y-4">
          <SwapInput
            label="From"
            amount={amount}
            onAmountChange={(val) => setAmount(val)}
            currency={fromCurrency}
            onCurrencyChange={(val) => setFromCurrency(val.toUpperCase())}
            options={currenciesDropdown}
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
            options={currenciesDropdown}
          />
        </div>
        <div className="text-center flex justify-center">
          {loadingRate ? (
            <FaSpinner size={24} className="animate-spin" />
          ) : (
            <p className="text-gray-400">Rate: {exchangeRate?.toFixed(6)}</p>
          )}
        </div>
        <SwapButton />
      </div>
    </div>
  );
};
