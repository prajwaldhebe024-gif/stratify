import type { Strategy } from "../types/Strategy";

type Props = {
  strategy: Strategy;
};

function MarketConditionPanel({ strategy }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      {/* Best Conditions */}
      <div
        className="
          bg-slate-900/70
          border
          border-green-500/20

          rounded-2xl
          p-6

          transition-all
          duration-300

          hover:border-green-500/40
        "
      >
        <h3 className="text-2xl font-bold text-green-400 mb-6">
          Best Conditions
        </h3>

        <div className="space-y-4">
          {strategy.bestMarketConditions.map(
            (condition) => (
              <div
                key={condition}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="text-green-400">
                  ●
                </span>

                <span className="text-slate-300">
                  {condition}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Worst Conditions */}
      <div
        className="
          bg-slate-900/70
          border
          border-red-500/20

          rounded-2xl
          p-6

          transition-all
          duration-300

          hover:border-red-500/40
        "
      >
        <h3 className="text-2xl font-bold text-red-400 mb-6">
          Avoid During
        </h3>

        <div className="space-y-4">
          {strategy.worstMarketConditions.map(
            (condition) => (
              <div
                key={condition}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="text-red-400">
                  ●
                </span>

                <span className="text-slate-300">
                  {condition}
                </span>
              </div>
            )
          )}
        </div>
      </div>

    </div>
  );
}

export default MarketConditionPanel;