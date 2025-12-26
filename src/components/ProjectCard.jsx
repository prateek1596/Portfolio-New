export default function ProjectCard({ project }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-[420px] text-left">
      <h2 className="text-3xl font-bold mb-3">
        {project.title}
      </h2>

      <p className="text-gray-600 mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {/* GitHub Button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-lg bg-black text-white hover:scale-105 transition"
        >
          GitHub
        </a>

        {/* Live Demo Button (only shows if link exists) */}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
