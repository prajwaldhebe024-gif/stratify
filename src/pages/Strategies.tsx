import { useState } from "react";
import { strategies } from "../data/strategies";
import StrategyCard from "../components/StrategyCard";

function Strategies() {
  const [activeTab, setActiveTab] =
    useState("General");

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
        Explore professionally tested
        option trading strategies.
      </p>

      <div className="flex gap-4 mt-10">

        <button
          onClick={() =>
            setActiveTab("General")
          }
          className={`px-5 py-3 rounded-xl transition-all ${
            activeTab === "General"
              ? "bg-blue-600 text-white"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          General Strategies
        </button>

        <button
          onClick={() =>
            setActiveTab("Stratify Special")
          }
          className={`px-5 py-3 rounded-xl transition-all ${
            activeTab ===
            "Stratify Special"
              ? "bg-blue-600 text-white"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          Stratify Special
        </button>

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