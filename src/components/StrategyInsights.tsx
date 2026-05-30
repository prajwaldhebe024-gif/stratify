import type { Strategy } from "../types/Strategy";

type Props = {
  strategy: Strategy;
};

function StrategyInsights({ strategy }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">

      {/* Advantages */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">

        <h3 className="text-2xl font-bold mb-4 text-green-400">
          Advantages
        </h3>

        <ul className="space-y-3">
          {strategy.advantages.map((item) => (
            <li key={item}>
              ✓ {item}
            </li>
          ))}
        </ul>

      </div>

      {/* Disadvantages */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">

        <h3 className="text-2xl font-bold mb-4 text-red-400">
          Disadvantages
        </h3>

        <ul className="space-y-3">
          {strategy.disadvantages.map((item) => (
            <li key={item}>
              ⚠ {item}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default StrategyInsights;