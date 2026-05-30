import type { Strategy } from "../types/Strategy";

type Props = {
  strategy: Strategy;
};

function StrategyExecutionGuide({
  strategy,
}: Props) {
  const sections = [
    {
      title: "Entry Conditions",
      items: strategy.entryConditions,
    },
    {
      title: "Exit Conditions",
      items: strategy.exitConditions,
    },
    {
      title: "Adjustment Rules",
      items: strategy.adjustmentRules,
    },
    {
      title: "Common Mistakes",
      items: strategy.commonMistakes,
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-6">

      {sections.map((section) => (

        <div
          key={section.title}
          className="
            bg-slate-900/70

            border
            border-slate-800

            rounded-3xl

            p-6
          "
        >
          <h3 className="text-xl font-bold">
            {section.title}
          </h3>

          <ul className="mt-4 space-y-3">

            {section.items.map((item) => (

              <li
                key={item}
                className="
                  text-slate-300

                  flex
                  gap-3
                "
              >
                <span className="text-blue-400">
                  •
                </span>

                <span>{item}</span>
              </li>

            ))}

          </ul>

        </div>

      ))}

    </div>
  );
}

export default StrategyExecutionGuide;