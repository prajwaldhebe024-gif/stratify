import { useState } from "react";
import { strategies } from "../data/strategies";

function StrategyRankings() {
  const [filter, setFilter] =
    useState("All");

  const filteredStrategies =
    filter === "All"
      ? strategies
      : strategies.filter(
          (s) =>
            s.marketOutlook === filter
        );

  const sortedStrategies =
    [...filteredStrategies].sort(
      (a, b) => b.score - a.score
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold">
        Strategy Rankings
      </h1>

      <p className="text-slate-400 mt-4 text-xl">
        Discover the highest-rated strategies
        based on market conditions and overall score.
      </p>

      <div className="flex gap-4 mt-10">

        {[
          "All",
          "Bullish",
          "Bearish",
          "Neutral",
        ].map((item) => (
          <button
            key={item}
            onClick={() =>
              setFilter(item)
            }
            className={`px-5 py-3 rounded-xl transition-all ${
              filter === item
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

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

              <th className="p-5 text-left">
                Rank
              </th>

              <th className="p-5 text-left">
                Strategy
              </th>

              <th className="p-5 text-left">
                Outlook
              </th>

              <th className="p-5 text-left">
                Risk
              </th>

              <th className="p-5 text-left">
                Score
              </th>

            </tr>

          </thead>

          <tbody>

            {sortedStrategies.map(
              (strategy, index) => (
                <tr
                  key={strategy.id}
                  className="
                    border-b
                    border-slate-800
                    hover:bg-slate-800/30
                  "
                >
                  <td className="p-5">
                    #{index + 1}
                  </td>

                  <td className="p-5 font-semibold">
                    {strategy.name}
                  </td>

                  <td className="p-5">
                    {strategy.marketOutlook}
                  </td>

                  <td className="p-5">
                    {strategy.riskLevel}
                  </td>

                  <td className="p-5">
                    {strategy.score}
                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StrategyRankings;