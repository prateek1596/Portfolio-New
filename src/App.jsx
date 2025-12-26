import { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaGit, FaJava } from "react-icons/fa";
import { SiMongodb, SiMysql, SiOpencv, SiExpress } from "react-icons/si";
import { FiServer } from "react-icons/fi";

import ProjectSlider from "./components/ProjectSlider";
import ScrollNavbar from "./components/ScrollNavbar";
import Reveal from "./components/Reveal";
import ResumeMenu from "./components/ResumeMenu";
import SkillBar from "./components/SkillBar";
import { skills } from "./data/skills";
import Timeline from "./components/Timeline";



export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory">

      <ScrollNavbar />

      {/* HERO */}
      <section
        id="home"
        className="snap-start min-h-screen flex items-center justify-center soft-bg px-10"
      >
        <Reveal>
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-20">

            {/* LEFT */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4">
                Hi, I'm <span className="text-blue-600">Prateek</span> 👋
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                I build intelligent systems using AI, full-stack development and computer vision
                to solve real-world problems.
              </p>

              <div className="flex gap-4 items-center">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-black text-white rounded-lg shadow"
                >
                  View Projects
                </a>

                <div className="relative">
                  <button
                    onClick={() => setResumeOpen(!resumeOpen)}
                    className="px-6 py-3 bg-white border rounded-lg shadow"
                  >
                    Resume
                  </button>

                  <ResumeMenu open={resumeOpen} onClose={() => setResumeOpen(false)} />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gray-200 shadow-2xl overflow-hidden">
                <img
                  src="/prateek.jpeg"
                  alt="Prateek"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="snap-start min-h-screen flex items-center justify-center"
      >
        <ProjectSlider />
      </section>

      {/* ABOUT */}
      <section
  id="about"
  className="snap-start min-h-screen flex items-center justify-center soft-bg-purple px-10"
>
  <Reveal>
    <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-6xl p-10">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT — TIMELINE */}
        <Timeline />

        {/* RIGHT — ABOUT */}
        <div className="border-l pl-10 border-gray-300/50">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-gray-700 leading-relaxed">
            I’m a Computer Science student building real-world systems using AI,
            full-stack development, and computer vision. Over the last 2.5 years,
            I’ve built end-to-end products — from a sign language translator to
            healthcare platforms.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            I enjoy working across the stack — ML models, APIs, databases and
            modern UI — and I’m now looking for roles where I can grow and
            contribute to real products.
          </p>
        </div>

      </div>

    </div>
  </Reveal>
</section>



      {/* SKILLS */}
      <section
  id="skills"
  className="snap-start min-h-screen flex items-center justify-center soft-bg-blue px-10"
>
  <Reveal>
    <div className="max-w-4xl w-full">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  </Reveal>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="snap-start min-h-screen flex items-center justify-center soft-bg-warm px-10"
      >
        <Reveal>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-600 mb-8">
              I'm open to internships, placements and collaborations.
            </p>

            <div className="flex justify-center gap-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prateekyadav1596@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white rounded-lg shadow hover:scale-105 transition"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/prateek-yadav-b9094127b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0A66C2] text-white rounded-lg shadow hover:scale-105 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/prateek1596"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white rounded-lg shadow"
              >
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
