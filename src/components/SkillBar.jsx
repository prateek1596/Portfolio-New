import { motion } from "framer-motion";

export default function SkillBar({ name, level, icon, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group bg-white p-6 rounded-xl shadow-xl relative overflow-hidden cursor-pointer"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition" />

      <div className="relative z-10 flex gap-4 items-center">
        <img src={icon} className="w-12 h-12" />
        <div className="flex-1">
          <h3 className="font-semibold">{name}</h3>

          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1.2 }}
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
            />
          </div>

          <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition mt-2">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
