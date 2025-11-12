import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { issues } from "./issueList";
import { solutionWallet } from "./solutionWallet";

export default function MessyReactDemo() {
  return (
    <div className="bg-gray-900 w-full max-w-6-xl mx-auto rounded-3xl shadow-2xl p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-4 text-green-400 text-center">
        Messy React
      </h1>

      <section className="mb-6 text-white">
        <h2 className="text-xl font-semibold mb-2">Issues / Anti-patterns</h2>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          {issues.map((issue, idx) => (
            <li key={idx}>{issue}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6 text-white">
        <h2 className="text-xl font-semibold mb-2">
          Refactor code with explain
        </h2>
        <div className="overflow-x-auto rounded-xl shadow-inner">
          <SyntaxHighlighter
            language="tsx"
            style={tomorrow}
            customStyle={{
              minWidth: "100%",
              borderRadius: "12px",
              fontSize: "0.85rem",
              padding: "0.5rem",
            }}
          >
            {solutionWallet}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
