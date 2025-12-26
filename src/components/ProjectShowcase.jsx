export default function ProjectShowcase({ project, onOpen }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT — project info */}
      <div
        onClick={onOpen}
        className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.03] hover:shadow-3xl transition duration-500"
      >
        <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-500">Click to view details</p>
      </div>

      {/* RIGHT — video */}
      <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-black">

        {project.video.includes("youtube") ? (
          <iframe
            src={project.video}
            className="w-full h-[280px]"
            allowFullScreen
          />
        ) : (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-700"
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
          <span className="text-white text-lg font-semibold tracking-wide">
            ▶ Live Preview
          </span>
        </div>

      </div>
    </div>
  );
}
