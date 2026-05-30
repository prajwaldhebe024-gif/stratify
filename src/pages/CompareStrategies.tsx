import { useState } from "react";
import { strategies } from "../data/strategies";

function CompareStrategies() {
  const [leftId, setLeftId] = useState(1);
  const [rightId, setRightId] = useState(2);

  const leftStrategy = strategies.find(
    (s) => s.id === leftId
  );

  const rightStrategy = strategies.find(
    (s) => s.id === rightId
  );

  if (!leftStrategy || !rightStrategy) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold">
        Strategy Comparison
      </h1>

      <p className="text-slate-400 mt-4">
        Compare strategies side-by-side.
      </p>

      {/* Selectors */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <select
          value={leftId}
          onChange={(e) =>
            setLeftId(Number(e.target.value))
          }
          className="
            bg-slate-900
            border
            border-slate-700

            rounded-xl
            p-4
          "
        >
          {strategies.map((strategy) => (
            <option
              key={strategy.id}
              value={strategy.id}
            >
              {strategy.name}
            </option>
          ))}
        </select>

        <select
          value={rightId}
          onChange={(e) =>
            setRightId(Number(e.target.value))
          }
          className="
            bg-slate-900
            border
            border-slate-700

            rounded-xl
            p-4
          "
        >
          {strategies.map((strategy) => (
            <option
              key={strategy.id}
              value={strategy.id}
            >
              {strategy.name}
            </option>
          ))}
        </select>

      </div>

      {/* Comparison Table */}
      <div
        className="
          mt-10

          bg-slate-900/70
          border
          border-slate-800

          rounded-3xl
          overflow-hidden
        "
      >
        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-800">

              <th className="text-left p-5">
                Metric
              </th>

              <th className="text-left p-5">
                {leftStrategy.name}
              </th>

              <th className="text-left p-5">
                {rightStrategy.name}
              </th>

            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="p-5">
                Win Rate
              </td>

              <td className="p-5">
                {leftStrategy.winRate}%
              </td>

              <td className="p-5">
                {rightStrategy.winRate}%
              </td>
            </tr>

            <tr>
              <td className="p-5">
                CAGR
              </td>

              <td className="p-5">
                {leftStrategy.cagr}%
              </td>

              <td className="p-5">
                {rightStrategy.cagr}%
              </td>
            </tr>

            <tr>
              <td className="p-5">
                Max Drawdown
              </td>

              <td className="p-5">
                {leftStrategy.maxDrawdown}%
              </td>

              <td className="p-5">
                {rightStrategy.maxDrawdown}%
              </td>
            </tr>

            <tr>
              <td className="p-5">
                Market Outlook
              </td>

              <td className="p-5">
                {leftStrategy.marketOutlook}
              </td>

              <td className="p-5">
                {rightStrategy.marketOutlook}
              </td>
            </tr>

            <tr>
              <td className="p-5">
                Risk Level
              </td>

              <td className="p-5">
                {leftStrategy.riskLevel}
              </td>

              <td className="p-5">
                {rightStrategy.riskLevel}
              </td>
            </tr>

            <tr>
              <td className="p-5">
                Score
              </td>

              <td className="p-5">
                {leftStrategy.score}
              </td>

              <td className="p-5">
                {rightStrategy.score}
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default CompareStrategies;