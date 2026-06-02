import { currentMarketScenario }
from "../data/currentMarketScenario";

function MarketScenarioCard() {
  return (
    <div
      className="
        mt-18

        max-w-7xl
        mx-auto

        bg-gradient-to-r
        from-blue-500/10
        via-slate-900/80
        to-slate-900

        border
        border-blue-500/20

        rounded-3xl

        p-8
        "
    >

      <div
        className="
          inline-flex

          px-3
          py-1

          rounded-full

          bg-blue-500/10

          text-blue-400

          text-sm
        "
      >
        CURRENT MARKET SCENARIO
      </div>

      <h2
        className="
          text-3xl
          font-bold

          mt-5
        "
      >
        Market Snapshot
      </h2>

      <div
        className="
          grid
          md:grid-cols-3

          gap-6

          mt-8
        "
      >

        <div
          className="
            bg-slate-800/40

            rounded-2xl

            p-5
          "
        >
          <p className="text-slate-400">
            Trend
          </p>

          <p
            className="
              text-2xl
              font-bold

              mt-2
            "
          >
            {currentMarketScenario.trend}
          </p>
        </div>

        <div
          className="
            bg-slate-800/40

            rounded-2xl

            p-5
          "
        >
          <p className="text-slate-400">
            Volatility
          </p>

          <p
            className="
              text-2xl
              font-bold

              mt-2
            "
          >
            {currentMarketScenario.volatility}
          </p>
        </div>

        <div
          className="
            bg-slate-800/40

            rounded-2xl

            p-5
          "
        >
          <p className="text-slate-400">
            Regime
          </p>

          <p
            className="
              text-2xl
              font-bold

              mt-2
            "
          >
            {currentMarketScenario.regime}
          </p>
        </div>

      </div>

      <div
        className="
          mt-8

          bg-slate-800/30

          rounded-2xl

          p-5
        "
      >
        <h3 className="font-semibold">
          What does this mean?
        </h3>

        <p
          className="
            text-slate-400

            mt-3
          "
        >
          {currentMarketScenario.summary}
        </p>
      </div>

      <p
        className="
          text-sm
          text-slate-500

          mt-6
        "
      >
        Last Updated:
        {" "}
        {currentMarketScenario.updatedOn}
      </p>

    </div>
  );
}

export default MarketScenarioCard;