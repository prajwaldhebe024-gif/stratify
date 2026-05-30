import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full" />

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full" />

      </div>

      <div className="max-w-5xl mx-auto text-center py-32">

        <p className="text-blue-400 font-semibold tracking-widest uppercase">
          Research • Validate • Execute
        </p>

        <h1 className="mt-6 text-6xl font-bold leading-tight">
          Trade Smarter With
          <span className="text-blue-500"> Visual Strategy Intelligence</span>
        </h1>

        <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto">
          Explore option strategies, compare setups,
          visualize payoff structures and learn options
          through interactive dashboards.
        </p>

        <div className="mt-12 flex justify-center gap-4">

          <Link
            to="/strategies"
            className="
              px-8 py-4
              rounded-2xl
              bg-blue-600
              hover:bg-blue-500
              transition-all
            "
          >
            Explore Strategies
          </Link>

          <Link
            to="/learn-options"
            className="
              px-8 py-4
              rounded-2xl

              border
              border-slate-700

              hover:border-blue-500
              transition-all
            "
          >
            Learn Options
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;