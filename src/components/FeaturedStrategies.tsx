import { strategies } from "../data/strategies";
import StrategyCard from "./StrategyCard";

function FeaturedStrategies() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2
        className="
          text-4xl
          font-bold
          mb-4

          transition-all
          duration-300
        "
      >
        Featured Strategies
      </h2>

      <p className="text-slate-400 mb-10">
        Explore our most popular trading strategies.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {strategies.map((strategy) => (
          <StrategyCard
            key={strategy.id}
            strategy={strategy}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedStrategies;