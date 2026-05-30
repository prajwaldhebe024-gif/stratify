import { useState } from "react";
import { strategies } from "../data/strategies";
import StrategyCard from "../components/StrategyCard";

function Strategies() {
  const [activeTab, setActiveTab] =
    useState("Directional");
  
  const [searchTerm, setSearchTerm] =
    useState("");

  const tabs = [
    "Directional",
    "Volatility",
    "Income",
    "Stratify Special",
  ];

  const filteredStrategies =
  strategies.filter(
    (strategy) =>
      strategy.category === activeTab &&
      strategy.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
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
        STRATEGY LIBRARY
      </div>

      <h1 className="text-5xl font-bold mt-4">
        Discover Trading Strategies
      </h1>

      <p className="text-slate-400 mt-4 text-lg max-w-3xl">
        Explore option strategies categorized
        by market objective, volatility outlook
        and risk profile.
      </p>

    </div>

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
      <div className="mt-8">

      <input
        type="text"
        placeholder="🔍 Search strategies..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="
          w-full

          bg-slate-900/70

          border
          border-slate-800

          rounded-2xl

          px-5
          py-4

          text-white

          focus:outline-none
          focus:border-blue-500

          transition-all
        "
      />
      <div className="mt-4 mb-2">

        <p className="text-slate-500 text-sm">
          Showing {filteredStrategies.length}
          {" "}
          strategies
        </p>

      </div>

    </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {filteredStrategies.length === 0 && (

          <div
            className="
              mt-12

              text-center

              bg-slate-900/50

              border
              border-slate-800

              rounded-3xl

              p-12
            "
          >
            <h3 className="text-2xl font-semibold">
              No strategies found
            </h3>

            <p className="text-slate-400 mt-3">
              Try a different search term.
            </p>
          </div>

        )}

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