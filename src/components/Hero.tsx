function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full" />

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

        <p className="text-blue-400 font-medium mb-4 tracking-widest">
          RESEARCH • VALIDATE • EXECUTE
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight">

          Discover.

          <br />

          Validate.

          <br />

          Execute.

        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-400">
          Professional trading strategies,
          historical analytics, market intelligence
          and value investing insights in one platform.
        </p>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">

          <button
            className="
              group
              px-8
              py-4
              rounded-xl

              bg-blue-600

              transition-all
              duration-300

              hover:bg-blue-500
              hover:-translate-y-1
              hover:shadow-2xl
              hover:shadow-blue-500/30
            "
          >
            Explore Strategies
          </button>

          <button
            className="
              group
              px-8
              py-4
              rounded-xl

              border
              border-slate-700

              transition-all
              duration-300

              hover:border-blue-500
              hover:text-blue-400
              hover:-translate-y-1
              hover:bg-slate-900/50
            "
          >
            Buffett Brain
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;