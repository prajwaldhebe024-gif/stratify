import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";

function LearnOptions() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold">
          Learn Options
        </h1>

        <p className="text-slate-400 mt-4 text-xl max-w-3xl">
          Learn options trading from first principles
          through interactive lessons, visual examples
          and practical applications.
        </p>
      </div>

      {/* Progress Banner */}
      <div
        className="
          mb-12

          bg-gradient-to-r
          from-blue-600/20
          to-cyan-600/20

          border
          border-blue-500/20

          rounded-3xl
          p-6
        "
      >
        <h2 className="text-2xl font-bold">
          Your Learning Journey
        </h2>

        <p className="text-slate-300 mt-2">
          Master the fundamentals before diving
          into advanced strategy design and execution.
        </p>
      </div>

      {/* Lessons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.slug}
            className="
              group
              relative
              overflow-hidden

              bg-slate-900/70
              border
              border-slate-800

              rounded-3xl
              p-8

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-blue-500/30
              hover:shadow-lg
              hover:shadow-blue-500/10
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                top-0
                right-0

                w-40
                h-40

                bg-blue-500/10
                blur-3xl

                opacity-0
                group-hover:opacity-100

                transition-all
                duration-300
              "
            />

            <div className="relative z-10">
              <div className="text-5xl mb-6">
                {lesson.icon}
              </div>

              <h2 className="text-2xl font-bold">
                {lesson.title}
              </h2>

              <p className="text-slate-400 mt-4">
                {lesson.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  {lesson.sections.length} Topics
                </span>

                <Link
                  to={`/learn-options/${lesson.slug}`}
                  className="
                    px-4
                    py-2

                    rounded-xl

                    bg-blue-600
                    hover:bg-blue-500

                    transition-all
                  "
                >
                  Start →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearnOptions;