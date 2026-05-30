type Props = {
  strategy: any;
};

function StrategyScoreBreakdown({
  strategy,
}: Props) {

  const metrics = [
    {
      name: "Profitability",
      value: strategy.profitability,
    },
    {
      name: "Consistency",
      value: strategy.consistency,
    },
    {
      name: "Capital Efficiency",
      value: strategy.capitalEfficiency,
    },
    {
      name: "Execution",
      value: strategy.easeOfExecution,
    },
    {
      name: "Adaptability",
      value: strategy.adaptability,
    },
  ];

  return (
    <div
      className="
        bg-slate-900/70
        border
        border-slate-800

        rounded-3xl

        p-8
      "
    >
      <h2 className="text-3xl font-bold">
        Score Breakdown
      </h2>

      <div className="mt-8 space-y-5">

        {metrics.map((metric) => (

          <div key={metric.name}>

            <div className="flex justify-between mb-2">

              <span>
                {metric.name}
              </span>

              <span>
                {metric.value}/10
              </span>

            </div>

            <div
              className="
                h-3
                rounded-full
                bg-slate-800
              "
            >
              <div
                className="
                  h-3
                  rounded-full
                  bg-blue-500
                "
                style={{
                  width: `${metric.value * 10}%`,
                }}
              />
            </div>

          </div>

        ))}

      </div>
    </div>
  );
}

export default StrategyScoreBreakdown;