import Hero from "../components/Hero";
import NewsTicker from "../components/NewsTicker";
import FeaturedStrategies from "../components/FeaturedStrategies";
import StatsStrip from "../components/StatsStrip";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NewsTicker />

      <Hero />

      <StatsStrip />  

      <FeaturedStrategies />
      <section className="mt-32 px-4 md:px-8">

        <div className="pl-4 md:pl-8 mb-12">

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
            STRATIFY ROADMAP
          </div>

          <h2
            className="
              text-5xl
              font-bold
              mt-4
              tracking-tight
            "
          >
            Building the Operating System
            <br />
            for Options Traders
          </h2>

          <p
            className="
              text-slate-400
              mt-5
              text-lg
              max-w-3xl
              leading-relaxed
            "
          >
            Stratify is evolving from a strategy library into a
            complete research, validation and execution platform.
            Here's what we're building next.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {/* Phase 1 */}

          <div
            className="
              bg-slate-900/70
              border
              border-green-500/20

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

                bg-green-500/20
                text-green-400

                text-sm
              "
            >
              Phase 1 · Live
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Foundation
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">

              <li>✓ Strategy Library</li>

              <li>✓ Strategy Details</li>

              <li>✓ Learn Options</li>

              <li>✓ Strategy Comparison</li>

            </ul>
          </div>

          {/* Phase 2 */}

          <div
            className="
              bg-slate-900/70
              border
              border-blue-500/20

              rounded-3xl
              p-8

              hover:-translate-y-1
              transition-all
            "
          >
            <div
              className="
                inline-flex

                px-3
                py-1

                rounded-full

                bg-blue-500/20
                text-blue-400

                text-sm
              "
            >
              Phase 2 · In Development
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Intelligence Layer
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">

              <li>🚧 Market Pulse</li>

              <li>🚧 Buffett Brain</li>

              <li>🚧 Strategy Rankings</li>

              <li>🚧 Regime Detection</li>

            </ul>
          </div>

          {/* Phase 3 */}

          <div
            className="
              bg-slate-900/70
              border
              border-amber-500/20

              rounded-3xl
              p-8

              hover:-translate-y-1
              transition-all
            "
          >
            <div
              className="
                inline-flex

                px-3
                py-1

                rounded-full

                bg-amber-500/20
                text-amber-400

                text-sm
              "
            >
              Phase 3 · Planned
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Execution Layer
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">

              <li>⏳ Backtesting Engine</li>

              <li>⏳ Portfolio Builder</li>

              <li>⏳ Strategy Marketplace</li>

              <li>⏳ Trade Journal</li>

            </ul>
          </div>

        </div>
        <Link
          to="/strategy-rankings"
          className="
            px-6
            py-3
            rounded-xl
            bg-slate-800
            hover:bg-slate-700
            transition-all
          "
        >
          View Rankings
        </Link>

      </section>
    </>
  );
}

export default Home;