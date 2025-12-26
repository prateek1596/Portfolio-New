import { useState } from "react";
import { projects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import ProjectShowcase from "./ProjectShowcase";
import ProjectModal from "./ProjectModal";

export default function ProjectSlider() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const project = projects[index];

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section
      className={`w-screen h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br ${project.gradient} transition-all duration-700`}
    >
      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}

      <div className="relative w-full h-full flex items-center justify-center">

        <button
          onClick={prev}
          className="absolute left-8 z-20 text-4xl text-gray-700 hover:scale-125 transition"
        >
          ‹
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectShowcase project={project} onOpen={() => setOpen(true)} />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          className="absolute right-8 z-20 text-4xl text-gray-700 hover:scale-125 transition"
        >
          ›
        </button>

      </div>
    </section>
  );
}
