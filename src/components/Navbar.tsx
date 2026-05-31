import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Strategies",
      path: "/strategies",
    },
    {
      name: "Rankings",
      path: "/strategy-rankings",
    },
    {
      name: "Market Pulse",
      path: "/market-pulse",
    },
    {
      name: "Buffett Brain",
      path: "/buffett-brain",
    },
    {
      name: "Compare",
      path: "/compare",
    },
    {
      name: "Learn Options",
      path: "/learn-options",
    }
  ];

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-slate-950/70
        border-b
        border-slate-800/50
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Strat
            <span className="text-blue-400">ify</span>
          </h1>

          <p className="text-xs text-slate-500">
            Research • Validate • Execute
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive =
              item.path !== "#" &&
              location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  group
                  relative
                  px-4
                  py-2
                  rounded-xl
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-slate-800
                        text-white
                        border
                        border-slate-700
                      `
                      : `
                        text-slate-400
                        hover:text-white
                        hover:bg-slate-800/60
                        hover:-translate-y-1
                        hover:shadow-lg
                        hover:shadow-blue-500/10
                      `
                  }
                `}
              >
                {item.name}

                {!isActive && (
                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      bg-blue-400
                      transition-all
                      duration-300
                      group-hover:w-3/4
                      group-hover:left-[12.5%]
                    "
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Market Regime */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            bg-slate-900/70
            border
            border-slate-800
          "
        >
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

          <span className="text-sm text-slate-300">
            Range Bound
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;