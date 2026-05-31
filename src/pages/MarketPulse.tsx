import ConfidenceBar from "../components/ConfidenceBar";
import { Link } from "react-router-dom";
import { getRecommendations } from "../utils/recommendationEngine";
import { useState } from "react";
import { generateMarketSummary } from "../utils/marketSummary";
import { getRegimeReasons } from "../utils/regimeReasons";


function MarketPulse() {

    const [regime, setRegime] =
    useState("Range Bound");

    const [volatility, setVolatility] =
    useState("Low");

    const [trend, setTrend] =
    useState("Neutral");

    const recommendations =
    getRecommendations(
        regime,
        volatility,
        trend
    );

    const maxScore = recommendations[0]?.finalScore ?? 1;

    const regimeReasons =
    getRegimeReasons(
        regime,
        volatility,
        trend
    );

    const marketSummary =
    generateMarketSummary(
        regime,
        volatility,
        trend
    );

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

            Today's Edge

            <br/>
            {regime}
            {" • "}
            {volatility}
            {" Volatility"}
            <br/>

            Premium selling strategies currently
            offer the strongest risk-adjusted opportunity.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <select
            value={regime}
            onChange={(e) =>
            setRegime(e.target.value)
            }
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-4
            "
        >
            <option>Range Bound</option>
            <option>Trending</option>
        </select>

        <select
            value={volatility}
            onChange={(e) =>
            setVolatility(e.target.value)
            }
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-4
            "
        >
            <option>Low</option>
            <option>High</option>
        </select>

        <select
            value={trend}
            onChange={(e) =>
            setTrend(e.target.value)
            }
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-4
            "
        >
            <option>Bullish</option>
            <option>Bearish</option>
            <option>Neutral</option>
        </select>

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
            {regime}
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
            {volatility}
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
            {trend}
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

            {regimeReasons.map(
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

        <div
            className="
                mt-8

                bg-blue-500/10

                border
                border-blue-500/20

                rounded-3xl

                p-6
            "
            >
            <h2 className="text-xl font-bold">
                Today's Market Summary
            </h2>

            <p className="text-slate-300 mt-3">
                {marketSummary}
            </p>
            </div>

      {/* Recommendations */}

    <div className="mt-12">

    <h2 className="text-3xl font-bold">
        Recommended Today
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-6">

        {recommendations.map(
        (recommendation, index) => {

            const strategy =
            recommendation.strategy;

            return (
            <div
                key={strategy.id}
                className={`
                p-6
                rounded-3xl
                border

                transition-all

                ${
                    index === 0
                    ? `
                        bg-blue-500/10
                        border-blue-500/30
                        shadow-lg
                        shadow-blue-500/10
                    `
                    : `
                        bg-slate-900/70
                        border-slate-800
                    `
                }
                `}
            >

                {index === 0 && (
                <div className="mb-3 text-blue-400">
                    🏆 Top Recommendation
                </div>
                )}

                <h3 className="text-xl font-bold">
                #{index + 1} {strategy.name}
                </h3>

                <ConfidenceBar
                value={Math.round(
                (recommendation.finalScore /
                    maxScore) *
                    100
                )}
                />

               <div className="mt-5">

                <p className="text-slate-400 text-sm">
                    Overall Strategy Score
                </p>

                <p className="text-2xl font-bold">
                    {strategy.score}
                </p>

                </div>

                <div className="mt-5">

                <p
                    className="
                    text-sm
                    uppercase
                    tracking-wide

                    text-slate-400

                    mb-3
                    "
                >
                    Why Ranked #{index + 1}
                </p>

                <div className="space-y-2">

                    {recommendation.rankingReasons.map(
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

                </div>

                <div className="mt-5 flex flex-wrap gap-2">

                <span
                    className="
                    px-2
                    py-1

                    rounded-full

                    bg-slate-800

                    text-xs
                    "
                >
                    {strategy.marketOutlook}
                </span>

                <span
                    className="
                    px-2
                    py-1

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

      

    </div>
  );
}

export default MarketPulse;