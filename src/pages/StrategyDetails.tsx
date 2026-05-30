import { useParams } from "react-router-dom";
import { strategies } from "../data/strategies";
import StrategySummaryCards from "../components/StrategySummaryCards";
import StrategyInsights from "../components/StrategyInsights";
import MarketConditionPanel from "../components/MarketConditionPanel";
import StrategySnapshot from "../components/StrategySnapshot";
import StrategyPayoffChart from "../components/StrategyPayoffChart";
import StrategyScoreBreakdown from "../components/StrategyScoreBreakdown";
import StrategyExecutionGuide from "../components/StrategyExecutionGuide";

function StrategyDetails() {
  const { id } = useParams();

  const strategy = strategies.find(
    (s) => s.id === Number(id)
  );

  if (!strategy) {
    return (
      <div className="p-10 text-white">
        Strategy not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div
  className="
    relative
    overflow-hidden

    bg-slate-900/60
    border
    border-slate-800

    rounded-3xl
    p-10

    mb-12
  "
>
  {/* Glow */}
  <div
    className="
      absolute
      top-0
      right-0

      w-72
      h-72

      bg-blue-500/10
      blur-3xl
    "
  />

  <div className="relative z-10">

    <h1 className="text-6xl font-bold">
      {strategy.name}
    </h1>

    <p className="mt-6 text-xl text-slate-400 max-w-3xl">
      {strategy.shortDescription}
    </p>

    <div className="mt-6">
      <span
        className="
          text-cyan-400
          text-2xl
          font-bold
        "
      >
        ⭐ {strategy.score}/10
      </span>
    </div>

    <div className="flex flex-wrap gap-3 mt-6">

      <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400">
        {strategy.marketOutlook}
      </span>

      <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400">
        {strategy.volatilityOutlook}
      </span>

      <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400">
        {strategy.riskLevel}
      </span>

    </div>

    </div>
  </div>

      <StrategySnapshot strategy={strategy} />

      <div className="mt-8 flex gap-4 flex-wrap">
        <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400">
          {strategy.marketOutlook}
        </span>

        <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400">
          {strategy.volatilityOutlook}
        </span>

        <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400">
          {strategy.riskLevel}
        </span>
      </div>
      <StrategySummaryCards strategy={strategy} />

      <div className="mt-16">
        <StrategyInsights strategy={strategy} />
        <div className="mt-8">

          <StrategyScoreBreakdown
            strategy={strategy}
          />
          <div className="mt-8">

            <StrategyExecutionGuide
              strategy={strategy}
            />

          </div>

        </div>
        <section className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Market Environment
          </h2>

          <section className="mt-16">
            <StrategyPayoffChart
              strategyName={strategy.name}
            />
          </section>
          <MarketConditionPanel strategy={strategy} />

        </section>
      </div>
    </div>
  );
}

export default StrategyDetails;