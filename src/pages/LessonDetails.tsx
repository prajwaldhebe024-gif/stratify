import { useParams } from "react-router-dom";
import { lessons } from "../data/lessons";

function LessonDetails() {
  const { lessonId } = useParams();

  const lesson = lessons.find(
    (l) => l.slug === lessonId
  );

  if (!lesson) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold">
          Lesson Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="text-6xl mb-4">
          {lesson.icon}
        </div>

        <h1 className="text-5xl font-bold">
          {lesson.title}
        </h1>

        <p className="text-slate-400 text-xl mt-4">
          {lesson.description}
        </p>
      </div>

      <div className="space-y-6">
        {lesson.sections.map((section) => (
          <div
            key={section.title}
            className="
              bg-slate-900/70
              border
              border-slate-800

              rounded-3xl
              p-8
            "
          >
            <h2 className="text-2xl font-bold mb-4">
              {section.title}
            </h2>

            <p className="text-slate-300 leading-8">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LessonDetails;