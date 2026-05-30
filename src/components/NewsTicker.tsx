function NewsTicker() {
  const items = [
    "📈 NIFTY breaks above 25,000",
    "💰 FII Net Buy ₹4,200 Cr",
    "⚡ High IV observed in weekly options",
    "📊 RBI Policy Announcement this week",
    "📈 Bank Nifty showing strength",
    "🧠 Buffett Brain: TCS nearing fair value",
    "❤️ Stratify Special: New Income Strategy Added! for Nikkuuuuuuuu"
  ];

  return (
    <div className="relative border-y border-slate-800 bg-slate-950 overflow-hidden">
      <div className="flex items-center">

        <div className="z-10 flex items-center gap-3 px-5 py-3 border-r border-slate-800 bg-slate-950 shrink-0">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>

          <span className="text-xs font-bold tracking-[0.2em] text-slate-300">
            LIVE MARKET PULSE
          </span>
        </div>

        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="animate-marquee inline-block py-3">
            {items.map((item, index) => (
              <span
                key={index}
                className="mx-10 text-sm text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default NewsTicker;