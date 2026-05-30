import { useState } from "react";
import { strategies } from "../data/strategies";
import StrategyCard from "../components/StrategyCard";

function Strategies() {
  const [activeTab, setActiveTab] =
    useState("Directional");

  const tabs = [
    "Directional",
    "Volatility",
    "Income",
    "Stratify Special",
  ];

  const filteredStrategies =
    strategies.filter(
      (strategy) =>
        strategy.category === activeTab
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold">
        Strategy Library
      </h1>

      <p className="text-slate-400 mt-4">
        Explore option strategies organized
        by market objective.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab)
            }
            className={`px-5 py-3 rounded-xl transition-all ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            {tab} (
            {
              strategies.filter(
                (s) => s.category === tab
              ).length
            }
            )
          </button>
        ))}

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {filteredStrategies.map(
          (strategy) => (
            <StrategyCard
              key={strategy.id}
              strategy={strategy}
            />
          )
        )}

      </div>

    </div>
  );
}

export default Strategies;