import { useEffect, useRef } from "react";
import { timeline } from "../data/timeline";

export default function Timeline() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let scroll = 0;
    let paused = false;

    const speed = 1.2; // ⭐ Increase to 1.4 if you want faster

    const animate = () => {
      if (!paused) {
        scroll += speed;

        if (scroll >= el.scrollWidth - el.clientWidth) {
          scroll = 0;
        }

        el.scrollLeft = scroll;
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Pause on hover
    el.addEventListener("mouseenter", () => (paused = true));
    el.addEventListener("mouseleave", () => (paused = false));

    return () => {
      el.removeEventListener("mouseenter", () => (paused = true));
      el.removeEventListener("mouseleave", () => (paused = false));
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden py-10 relative"
    >
      <div className="flex gap-12 min-w-max px-16">
        {timeline.map((item, i) => (
          <div
            key={i}
            className="w-[300px] flex-shrink-0 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500"
          >
            <p className="text-sm text-blue-600 font-semibold mb-2">
              {item.year}
            </p>

            <h3 className="text-xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
