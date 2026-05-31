function BuffettBrain() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Hero */}

      <div className="mb-10">

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
          BUFFETT BRAIN • AI INVESTING ENGINE
        </div>

        <h1 className="text-6xl font-bold mt-5">
          Buffett Brain
        </h1>

        <p className="text-slate-400 mt-5 text-xl max-w-4xl">
          Analyze businesses, evaluate investment
          opportunities, understand competitive
          advantages and receive AI-powered
          investing insights.
        </p>

      </div>

      {/* Quick Prompts */}

      <div className="flex flex-wrap gap-3 mb-8">

        {[
          "Analyze Reliance Industries",
          "Evaluate TCS",
          "Compare Infosys vs TCS",
          "Is HDFC Bank undervalued?",
          "Strong moat businesses",
        ].map((prompt) => (

          <div
            key={prompt}
            className="
              px-4
              py-2

              rounded-full

              bg-slate-900/70
              border
              border-slate-800

              text-sm
              text-slate-300
            "
          >
            {prompt}
          </div>

        ))}

      </div>

      {/* AI Workspace */}

      <div
        className="
          overflow-hidden

          rounded-3xl

          border
          border-slate-800

          bg-slate-900/70

          shadow-2xl
        "
      >

        <iframe
          src="https://www.chatbase.co/utz-CKSk5JTmiAQyDsUHj/help"
          title="Buffett Brain"

          className="
            w-full
            h-[900px]
          "
        />

      </div>

    </div>
  );
}

export default BuffettBrain;