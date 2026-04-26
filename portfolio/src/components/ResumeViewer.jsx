import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaTimes } from 'react-icons/fa'

const ResumeViewer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full h-full bg-primary-bg rounded-none overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header with Close and Download buttons */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-primary-bg to-transparent">
              <div className="flex items-center gap-3">
                <h2 className="text-white font-display text-lg font-semibold">
                  My Resume
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <motion.a
                  href="/Prince_Resume.pdf"
                  download="Prince_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-accent-cyan text-primary-bg rounded-lg font-medium text-sm hover:bg-accent-cyan/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload size={14} />
                  Download Resume
                </motion.a>
                <motion.button
                  onClick={onClose}
                  className="p-2 bg-primary-card text-white rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes size={18} />
                </motion.button>
              </div>
            </div>

            {/* PDF Viewer */}
            <iframe
              src="/Prince_Resume.pdf"
              className="w-full h-full"
              title="Resume"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResumeViewer
