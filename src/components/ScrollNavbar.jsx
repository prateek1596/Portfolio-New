import { useEffect, useState } from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function ScrollNavbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 🔥 FIX: observe real sections instead of missing .snap-section
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // 🔥 important for snap scrolling
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="relative flex flex-col gap-4 bg-white/70 backdrop-blur-lg p-3 rounded-full shadow-xl">

        {items.map((item, i) => {
          const angle = (-90 + (i * 180) / (items.length - 1)) * (Math.PI / 180);
          const x = open ? Math.cos(angle) * 90 : 0;
          const y = open ? Math.sin(angle) * 90 : 0;

          return (
            <div key={item.id} className="relative flex items-center">

              {/* DOT */}
              <a
                href={`#${item.id}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 shadow ${
                  active === item.id
                    ? "bg-black scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />

              {/* LABEL */}
              <div
                style={{
                  transform: `translate(${-x}px, ${y}px)`,
                  opacity: open ? 1 : 0,
                }}
                className="absolute right-6 transition-all duration-500"
              >
                <a
                  href={`#${item.id}`}
                  className="bg-white px-4 py-2 rounded-xl shadow-xl text-sm whitespace-nowrap hover:bg-gray-100"
                >
                  {item.label}
                </a>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
