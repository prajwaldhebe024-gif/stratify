function StatsStrip() {
  const stats = [
    {
      label: "Strategies",
      value: "23"
    },
    {
      label: "Backtested Trades",
      value: "15K+"
    },
    {
      label: "Average Win Rate",
      value: "68%"
    },
    {
      label: "Market Regimes",
      value: "5"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              group
              bg-slate-900/80
              backdrop-blur-md
              border
              border-slate-800
              rounded-2xl
              p-6
              text-center

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-blue-500/30
              hover:shadow-xl
              hover:shadow-blue-500/10
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              {stat.value}
            </h3>

            <p className="text-slate-400 mt-2 text-sm">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default StatsStrip;