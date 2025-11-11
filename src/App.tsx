import "./App.css";
import { SwapForm } from "./components/SwapForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-gradient-to-tr from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl">
          <h1 className="text-2xl font-semibold mb-4">Fancy Currency Swap</h1>
          <p className="text-sm text-slate-300 mb-6">
            Swap tokens quickly — prices are mocked/fetched; submission
            simulated.
          </p>
          <SwapForm />
        </div>
      </div>
    </div>
  );
}

export default App;
