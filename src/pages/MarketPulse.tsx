import { marketPulse } from "../data/marketPulse";
import { strategies } from "../data/strategies";
import ConfidenceBar from "../components/ConfidenceBar";
import { Link } from "react-router-dom";

function MarketPulse() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="mb-12">

        <div
          className="
            inline-flex
            px-3
            py-1
            rounded-full

            bg-blue-500/10
            text-blue-400

            text-sm

            border
            border-blue-500/20
          "
        >
          MARKET PULSE
        </div>

        <h1 className="text-5xl font-bold mt-4">
          Market Pulse
        </h1>

        <p className="text-slate-400 mt-4 text-lg">
            Today's Edge

            Range Bound • Low Volatility

            Premium selling strategies currently
            offer the strongest risk-adjusted opportunity.
        </p>

      </div>

      {/* Market Snapshot */}

      <div className="grid md:grid-cols-3 gap-6">

        <div
          className="
            bg-slate-900/70
            border
            border-slate-800

            rounded-3xl

            p-6
          "
        >
          <h3 className="text-slate-400">
            Market Regime
          </h3>

          <p className="text-3xl font-bold mt-3">
            Range Bound
          </p>
        </div>

        <div
          className="
            bg-slate-900/70
            border
            border-slate-800

            rounded-3xl

            p-6
          "
        >
          <h3 className="text-slate-400">
            Volatility
          </h3>

          <p className="text-3xl font-bold mt-3">
            Low
          </p>
        </div>

        <div
          className="
            bg-slate-900/70
            border
            border-slate-800

            rounded-3xl

            p-6
          "
        >
          <h3 className="text-slate-400">
            Trend
          </h3>

          <p className="text-3xl font-bold mt-3">
            Neutral
          </p>
        </div>

      </div>
      <div
        className="
            mt-10

            bg-slate-900/70

            border
            border-slate-800

            rounded-3xl

            p-8
        "
        >
        <h2 className="text-2xl font-bold">
            Why This Regime?
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-6">

            {marketPulse.regimeReasons.map(
            (reason) => (
                <div
                key={reason}
                className="
                    bg-slate-800/40
                    rounded-2xl
                    p-4
                "
                >
                ✓ {reason}
                </div>
            )
            )}

        </div>
        </div>

      {/* Recommendations */}

      <div className="grid md:grid-cols-3 gap-6 mt-6">

        {marketPulse.recommendations.map(
            (recommendation, index) => {

            const strategy =
                strategies.find(
                (s) =>
                    s.id ===
                    recommendation.strategyId
                );

            if (!strategy) {
                return null;
            }

            return (
                <div
                key={strategy.id}
                className="
                    bg-slate-900/70
                    border
                    border-slate-800
                    rounded-3xl
                    p-6
                "
                >
                <h3 className="text-xl font-bold">
                    #{index + 1} {strategy.name}
                </h3>

                <ConfidenceBar
                    value={recommendation.confidence}
                />

                <div className="mt-5 space-y-2">

                    {recommendation.reasons.map(
                    (reason) => (
                        <div
                        key={reason}
                        className="
                            text-sm
                            text-slate-300
                        "
                        >
                        ✓ {reason}
                        </div>
                    )
                    )}

                </div>

                <div className="mt-5 flex flex-wrap gap-2">

                    <span
                    className="
                        px-2 py-1
                        rounded-full
                        bg-slate-800
                        text-xs
                    "
                    >
                    {strategy.marketOutlook}
                    </span>

                    <span
                    className="
                        px-2 py-1
                        rounded-full
                        bg-slate-800
                        text-xs
                    "
                    >
                    {strategy.riskLevel} Risk
                    </span>

                </div>

                <Link
                    to={`/strategy/${strategy.id}`}
                    className="
                    inline-block
                    mt-5
                    text-blue-400
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

export default MarketPulse;