import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] w-[80vw] h-[80vh] p-10 overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-4xl font-bold mb-4">{project.title}</h2>

        <p className="text-gray-700 mb-6">{project.longDescription}</p>

        <div className="flex gap-4 mb-8">
          <a href={project.github} className="px-4 py-2 bg-black text-white rounded">
            GitHub
          </a>
          {project.demo && (
            <a href={project.demo} className="px-4 py-2 border rounded">
              Live Demo
            </a>
          )}
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <video src={project.video} controls className="w-full" />
        </div>
      </motion.div>
    </div>
  );
}
