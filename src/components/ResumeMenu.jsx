import { motion, AnimatePresence } from "framer-motion";

export default function ResumeMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={onClose}
          />

          {/* popup */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-3 right-0 bg-white rounded-xl shadow-xl border p-4 w-56"
          >
            <p className="text-sm text-gray-500 mb-3">Download Resume</p>

            <a
              href="/resume-photo.pdf"
              target="_blank"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-800"
            >
              📷 With Photo
            </a>

            <a
              href="/resume-nophoto.pdf"
              target="_blank"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-800"
            >
              📄 Without Photo
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
