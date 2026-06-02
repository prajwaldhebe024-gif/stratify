import { Link } from "react-router-dom";
import { strategyOfWeek } from "../data/strategyOfWeek";
import { strategies } from "../data/strategies";

function StrategyOfWeek() {

  const strategy =
    strategies.find(
      (s) =>
        s.id ===
        strategyOfWeek.strategyId
    );

  if (!strategy) {
    return null;
  }

  return (
    <div
      className="
        mt-16

        max-w-5xl
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
        STRATEGY OF THE WEEK
      </div>

      <h2
        className="
          text-4xl
          font-bold

          mt-5
        "
      >
        🏆 {strategy.name}
      </h2>

      <p
        className="
          text-slate-400

          mt-4

          max-w-3xl
        "
      >
        {strategy.shortDescription}
      </p>

      <div
        className="
          flex
          flex-wrap

          gap-3

          mt-6
        "
      >

        <span
          className="
            px-3
            py-1

            rounded-full

            bg-blue-500/20

            text-blue-300
          "
        >
          Confidence {strategyOfWeek.confidence}%
        </span>

        <span
          className="
            px-3
            py-1

            rounded-full

            bg-slate-800
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
          "
        >
          {strategy.riskLevel} Risk
        </span>

      </div>

      <div
        className="
          mt-8

          bg-slate-900/50

          rounded-2xl

          p-5
        "
      >
        <h3 className="font-semibold">
          Why this strategy?
        </h3>

        <p className="text-slate-400 mt-3">
          {strategyOfWeek.reason}
        </p>
      </div>

      <Link
        to={`/strategy/${strategy.id}`}
        className="
          inline-block

          mt-8

          px-6
          py-3

          rounded-xl

          bg-blue-600

          hover:bg-blue-500

          transition-all
        "
      >
        View Strategy →
      </Link>

    </div>
  );
}

export default StrategyOfWeek;