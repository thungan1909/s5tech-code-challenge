// pages/sum-to-n.tsx
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function SumToN() {
  const [n, setN] = useState<number>(0);
  const [results, setResults] = useState<{
    iterative: number;
    formula: number;
    recursive: number;
  }>({
    iterative: 0,
    formula: 0,
    recursive: 0,
  });

  const sum_to_n_a = (num: number): number => {
    let sum = 0;
    for (let i = 1; i <= num; i++) sum += i;
    return sum;
  };

  const sum_to_n_b = (num: number): number => (num * (num + 1)) / 2;

  const sum_to_n_c = (num: number): number =>
    num <= 1 ? num : num + sum_to_n_c(num - 1);

  const runAll = () => {
    setResults({
      iterative: sum_to_n_a(n),
      formula: sum_to_n_b(n),
      recursive: sum_to_n_c(n),
    });
  };

  // Code strings
  const codeIterative = `const sum_to_n_a = (num: number): number => {
  let sum = 0;
  for (let i = 1; i <= num; i++) sum += i;
  return sum;
};`;

  const codeFormula =
    "const sum_to_n_b = (num: number): number => num * (num + 1) / 2;";

  const codeRecursive =
    "const sum_to_n_c = (num: number): number => (num <= 1 ? num : num + sum_to_n_c(num - 1));";

  return (
    <div className="bg-gray-900 max-w-5xl rounded-3xl shadow-2xl p-8">
      <h1 className="text-2xl font-bold mb-2 text-green-400 text-center">
        Three ways to sum to n
      </h1>
      <p className="text-sm text-slate-300 text-center mb-6">
        Enter a number and see three different methods to calculate the sum from
        1 to n.
      </p>
      <div className="w-full mx-auto bg-gray-900 text-white rounded-2xl p-6 shadow-lg space-y-4">
        <div className="flex space-x-2">
          <input
            type="number"
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="flex-1 bg-gray-800 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter n"
          />
          <button
            onClick={runAll}
            className="rounded-xl bg-green-500 px-6 py-3 font-semibold hover:bg-green-400 transition"
          >
            Calculate
          </button>
        </div>

        {results.iterative !== undefined && (
          <div className="space-y-6">
            {[
              {
                title: "Iterative Method",
                code: codeIterative,
                result: results.iterative,
              },
              {
                title: "Formula Method",
                code: codeFormula,
                result: results.formula,
              },
              {
                title: "Recursive Method",
                code: codeRecursive,
                result: results.recursive,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-800 p-4 rounded-2xl shadow-inner space-y-2"
              >
                <h2 className="font-semibold text-lg text-green-400">
                  {item.title}
                </h2>
                <SyntaxHighlighter
                  language="typescript"
                  style={tomorrow}
                  customStyle={{
                    borderRadius: "12px",
                    fontSize: "0.85rem",
                    padding: "0.5rem",
                  }}
                >
                  {item.code}
                </SyntaxHighlighter>
                <p className="text-gray-300 font-medium">
                  Result: {item.result}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
