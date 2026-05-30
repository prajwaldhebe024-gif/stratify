import { Link } from "react-router-dom";
import type { Strategy } from "../types/Strategy";
import StrategyScorecard from "./StrategyScorecard";

type Props = {
  strategy: Strategy;
};

function StrategyCard({ strategy }: Props) {
  const getGlowColor = () => {
    switch (strategy.marketOutlook) {
      case "Bullish":
        return "bg-green-500/15";

      case "Bearish":
        return "bg-red-500/15";

      default:
        return "bg-blue-500/15";
    }
  };

  const getBadgeColor = () => {
    switch (strategy.marketOutlook) {
      case "Bullish":
        return "bg-green-500/20 text-green-400";

      case "Bearish":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-blue-500/20 text-blue-400";
    }
  };

  return (
    <Link to={`/strategy/${strategy.id}`}>
      <div
        className="
          group
          relative
          overflow-hidden

          bg-slate-800/90

          rounded-3xl
          p-8

          border
          border-slate-700/50

          transition-all
          duration-300

          hover:-translate-y-3
          hover:scale-[1.01]

          hover:border-blue-500/30
          hover:shadow-2xl
          hover:shadow-blue-500/10

          cursor-pointer
        "
      >
        {/* Market Glow */}
        <div
          className={`
            absolute
            -top-20
            -right-20

            w-64
            h-64

            rounded-full
            blur-3xl

            transition-all
            duration-500

            opacity-50
            group-hover:opacity-100

            ${getGlowColor()}
          `}
        />

        {/* Header */}
        <div className="relative z-10 flex justify-between items-start">
          <h3
            className="
              text-4xl
              font-bold

              transition-colors
              duration-300

              group-hover:text-white
            "
          >
            {strategy.name}
          </h3>

          <span
            className={`
              px-4
              py-2

              rounded-full

              text-sm
              font-medium

              ${getBadgeColor()}
            `}
          >
            {strategy.category}
          </span>
        </div>

        {/* Description */}
        <p className="relative z-10 text-slate-400 mt-6 text-lg">
          {strategy.shortDescription}
        </p>

        {/* Quick Metrics */}
        <div className="relative z-10 grid grid-cols-2 gap-8 mt-10">
          <div>
            <p className="text-slate-500 text-sm uppercase tracking-wider">
              Market Outlook
            </p>

            <p className="font-semibold text-xl mt-1">
              {strategy.marketOutlook}
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm uppercase tracking-wider">
              Risk Level
            </p>

            <p className="font-semibold text-xl mt-1">
              {strategy.riskLevel}
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm uppercase tracking-wider">
              Capital Required
            </p>

            <p className="font-semibold text-xl mt-1">
              {strategy.capitalRequired}
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm uppercase tracking-wider">
              Score
            </p>

            <p className="font-semibold text-xl mt-1">
              {strategy.score}/10
            </p>
          </div>
        </div>

        {/* Suitable For */}
        <div className="relative z-10 mt-10">
          <p className="text-slate-500 text-sm uppercase tracking-wider">
            Suitable For
          </p>

          <p className="font-semibold text-2xl mt-2">
            {strategy.suitableFor}
          </p>
        </div>

        {/* DNA */}
        <div className="relative z-10 mt-10">
          <StrategyScorecard strategy={strategy} />
        </div>
      </div>
    </Link>
  );
}

export default StrategyCard;