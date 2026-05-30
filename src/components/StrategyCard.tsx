import { Link } from "react-router-dom";
import type { Strategy } from "../types/Strategy";

type Props = {
  strategy: Strategy;
};

function StrategyCard({ strategy }: Props) {
  return (
    <Link to={`/strategy/${strategy.id}`}>
      <div
        className="
          bg-slate-800/90
          border
          border-slate-700

          rounded-3xl
          p-8

          transition-all
          duration-300

          hover:-translate-y-2
          hover:border-blue-500/30
          hover:shadow-xl
        "
      >
        <div className="flex justify-between items-start">
          <h3 className="text-3xl font-bold">
            {strategy.name}
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">

            <span
              className="
                px-3 py-1
                rounded-full
                text-xs

                bg-blue-500/20
                text-blue-300
              "
            >
              {strategy.marketOutlook}
            </span>

            <span
              className="
                px-3 py-1
                rounded-full
                text-xs

                bg-purple-500/20
                text-purple-300
              "
            >
              {strategy.volatilityOutlook} Volatility
            </span>

            <span
              className="
                px-3 py-1
                rounded-full
                text-xs

                bg-green-500/20
                text-green-300
              "
            >
              {strategy.riskLevel} Risk
            </span>

          </div>

          <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400">
            {strategy.category}
          </span>
        </div>

        <p className="mt-4 text-slate-400 text-lg">
          {strategy.shortDescription}
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div>
            <p className="text-slate-500 text-sm">
              Market Outlook
            </p>
            <p className="font-semibold">
              {strategy.marketOutlook}
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Risk Level
            </p>
            <p className="font-semibold">
              {strategy.riskLevel}
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Capital Required
            </p>
            <p className="font-semibold">
              {strategy.capitalRequired}
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Score
            </p>
            <p className="font-semibold text-xl">
              {strategy.score}/10
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-slate-500 text-sm">
            Suitable For
          </p>

          <p className="font-semibold text-xl">
            {strategy.suitableFor}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default StrategyCard;