import { useState } from "react";
import { Link } from "react-router-dom";
import { strategies } from "../data/strategies";

function StrategyRankings() {
  const [filter, setFilter] = useState("All");

  const filteredStrategies =
    filter === "All"
      ? strategies
      : strategies.filter(
          (strategy) =>
            strategy.marketOutlook === filter
        );

  const rankedStrategies = [
    ...filteredStrategies,
  ].sort((a, b) => b.score - a.score);

  const topStrategy =
    rankedStrategies.length > 0
      ? rankedStrategies[0]
      : null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Header */}

      <div className="mb-12">

        <div
          className="
            inline-flex
            px-3
            py-1
            rounded-full
            bg-blue-500/10
            border
            border-blue-500/20
            text-blue-400
            text-sm
          "
        >
          STRATEGY RANKINGS
        </div>

        <h1 className="text-5xl font-bold mt-4">
          Discover Top Strategies
        </h1>

        <p className="text-slate-400 mt-4 text-lg max-w-3xl">
          Explore the highest-ranked option
          strategies based on profitability,
          consistency, capital efficiency and
          execution quality.
        </p>

      </div>

      {/* Filters */}

      <div className="flex flex-wrap gap-4 mb-10">

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
            className={`

              px-5
              py-3

              rounded-xl

              transition-all

              ${
                filter === item
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }
            `}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Top Strategy Hero */}

      {topStrategy && (

        <div
          className="
            mb-12

            bg-gradient-to-r
            from-blue-500/20
            to-transparent

            border
            border-blue-500/20

            rounded-3xl

            p-8
          "
        >
          <div className="text-5xl">
            🏆
          </div>

          <p className="text-blue-400 mt-4">
            TOP RANKED STRATEGY
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {topStrategy.name}
          </h2>

          <p className="text-slate-300 mt-4 max-w-3xl">
            {topStrategy.shortDescription}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">

            <span
              className="
                px-3
                py-1

                rounded-full

                bg-blue-500/20
                text-blue-300
              "
            >
              Score {topStrategy.score}
              <div
                className="
                    mt-8

                    grid
                    md:grid-cols-2

                    gap-4
                "
                >

                <div
                    className="
                    bg-slate-900/50
                    rounded-2xl
                    p-4
                    "
                >
                    <div className="text-slate-400">
                    Profitability
                    </div>

                    <div className="text-2xl font-bold">
                    {topStrategy.profitability}/10
                    </div>
                </div>

                <div
                    className="
                    bg-slate-900/50
                    rounded-2xl
                    p-4
                    "
                >
                    <div className="text-slate-400">
                    Consistency
                    </div>

                    <div className="text-2xl font-bold">
                    {topStrategy.consistency}/10
                    </div>
                </div>

                <div
                    className="
                    bg-slate-900/50
                    rounded-2xl
                    p-4
                    "
                >
                    <div className="text-slate-400">
                    Capital Efficiency
                    </div>

                    <div className="text-2xl font-bold">
                    {topStrategy.capitalEfficiency}/10
                    </div>
                </div>

                <div
                    className="
                    bg-slate-900/50
                    rounded-2xl
                    p-4
                    "
                >
                    <div className="text-slate-400">
                    Adaptability
                    </div>

                    <div className="text-2xl font-bold">
                    {topStrategy.adaptability}/10
                    </div>
                </div>

                </div>
            </span>

            <span
              className="
                px-3
                py-1

                rounded-full

                bg-slate-800
              "
            >
              {topStrategy.marketOutlook}
            </span>

            <span
              className="
                px-3
                py-1

                rounded-full

                bg-slate-800
              "
            >
              {topStrategy.riskLevel} Risk
            </span>

          </div>

          <Link
            to={`/strategy/${topStrategy.id}`}
            className="
              inline-block

              mt-6

              px-5
              py-3

              rounded-xl

              bg-blue-600
              hover:bg-blue-500

              transition-all
            "
          >
            View Strategy
          </Link>

        </div>

      )}

      {/* Ranking Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {rankedStrategies.map(
          (strategy, index) => {

            const rank =
              index === 0
                ? "🥇"
                : index === 1
                ? "🥈"
                : index === 2
                ? "🥉"
                : `#${index + 1}`;

            return (

              <div
                key={strategy.id}
                className="
                  bg-slate-900/70

                  border
                  border-slate-800

                  rounded-3xl

                  p-6

                  hover:-translate-y-1
                  hover:border-blue-500/30

                  transition-all
                "
              >

                <div className="text-2xl">
                  {rank}
                </div>

                <h3 className="text-xl font-bold mt-4">
                  {strategy.name}
                </h3>

                <p className="text-slate-400 mt-3 min-h-[72px]">
                  {strategy.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  <span
                    className="
                      px-3
                      py-1

                      rounded-full

                      bg-blue-500/20
                      text-blue-300

                      text-sm
                    "
                  >
                    Score {strategy.score}
                  </span>

                  <span
                    className="
                      px-3
                      py-1

                      rounded-full

                      bg-slate-800

                      text-sm
                    "
                  >
                    {strategy.marketOutlook}
                  </span>

                  <span
                    className="
                      px-3
                      py-1

                      rounded-full

                      bg-slate-800

                      text-sm
                    "
                  >
                    {strategy.riskLevel}
                  </span>

                </div>

                <Link
                  to={`/strategy/${strategy.id}`}
                  className="
                    inline-block

                    mt-6

                    text-blue-400

                    hover:text-blue-300
                  "
                >
                  View Strategy →
                </Link>

              </div>

            );
          }
        )}

      </div>

    </div>
  );
}

export default StrategyRankings;