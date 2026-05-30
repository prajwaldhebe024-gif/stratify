import type { Strategy } from "../types/Strategy";

type Props = {
  strategy: Strategy;
};

function StrategySnapshot({ strategy }: Props) {
  const items = [
    {
      label: "Market",
      value: strategy.marketOutlook,
      color: "text-blue-400",
      icon: "📊",
    },
    {
      label: "Volatility",
      value: strategy.volatilityOutlook,
      color: "text-purple-400",
      icon: "⚡",
    },
    {
      label: "Risk",
      value: strategy.riskLevel,
      color: "text-orange-400",
      icon: "🛡️",
    },
    {
      label: "Capital",
      value: strategy.capitalRequired,
      color: "text-green-400",
      icon: "💰",
    },
    {
      label: "Score",
      value: `${strategy.score}/10`,
      color: "text-cyan-400",
      icon: "⭐",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-10">
      {items.map((item) => (
        <div
          key={item.label}
          className="
            group
            bg-slate-900/70
            border
            border-slate-800

            rounded-2xl
            p-5

            text-center

            transition-all
            duration-300

            hover:-translate-y-2
            hover:border-blue-500/30
            hover:shadow-lg
            hover:shadow-blue-500/10
          "
        >
          <div className="text-2xl mb-3">
            {item.icon}
          </div>

          <p className="text-slate-500 text-sm uppercase tracking-wider">
            {item.label}
          </p>

          <p
            className={`mt-3 text-xl font-bold ${item.color}`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StrategySnapshot;