import type { Strategy } from "../types/Strategy";

type Props = {
  strategy: Strategy;
};

function StrategySummaryCards({ strategy }: Props) {
  const items = [
    {
      label: "Market Outlook",
      value: strategy.marketOutlook,
    },
    {
      label: "Volatility",
      value: strategy.volatilityOutlook,
    },
    {
      label: "Risk Level",
      value: strategy.riskLevel,
    },
    {
      label: "Capital Required",
      value: strategy.capitalRequired,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4 mt-10">
      {items.map((item) => (
        <div
          key={item.label}
          className="
            group
            bg-slate-900/80
            border
            border-slate-800
            rounded-2xl
            p-5

            transition-all
            duration-300

            hover:-translate-y-2
            hover:border-blue-500/30
            hover:shadow-lg
            hover:shadow-blue-500/10
          "
        >
          <p className="text-slate-500 text-sm">
            {item.label}
          </p>

          <p className="text-xl font-bold mt-2">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StrategySummaryCards;