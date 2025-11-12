import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { issues } from "./issueList";
import { solutionWallet } from "./solutionWallet";

export default function MessyReactDemo() {
  return (
    <div className="bg-gray-900 max-w-5xl rounded-3xl shadow-2xl p-8">
      <h1 className="text-2xl font-bold mb-2 text-green-400 text-center">
        Messy React
      </h1>
      <section className="mb-8 text-white">
        <h2 className="text-xl font-semibold mb-2">Issues / Anti-patterns</h2>
        <ul className="list-disc list-inside space-y-1">
          {issues.map((issue, idx) => (
            <li key={idx}>{issue}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8 text-white">
        <h2 className="text-xl font-semibold mb-2">
          Refactor code with explain
        </h2>
        <SyntaxHighlighter language="tsx" style={tomorrow}>
          {solutionWallet}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
