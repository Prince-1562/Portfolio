import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaBuilding, FaImage, FaIdCard } from 'react-icons/fa'
import { GITHUB_URL } from '../constants'

const projects = [
  {
    id: 1,
    title: "Smart Society Management System",
    description: "A comprehensive web application for managing society operations including resident management, maintenance tracking, visitor logs, and communication between residents and administrators.",
    icon: FaBuilding,
    image: "/society.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/prince-makani/smart-society",
    demo: "https://smart-society.demo.com",
    color: "#00d4ff"
  },
  {
    id: 2,
    title: "Courier Management System",
    description: "A full-featured courier tracking and management system that enables users to send, track, and receive packages with real-time status updates and delivery confirmation.",
    icon: FaIdCard,
    image: "/courier.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/prince-makani/courier-management",
    demo: "https://courier.demo.com",
    color: "#7c3aed"
  },
  {
    id: 3,
    title: "Image Encryption/Decryption Tool",
    description: "A secure image encryption tool using advanced cryptographic algorithms to protect sensitive images. Features include AES-256 encryption, steganography, and batch processing.",
    icon: FaImage,
    image: "/encryption.jpg",
    tech: ["Python", "Cryptography", "Tkinter", "Steganography"],
    github: "https://github.com/prince-makani/image-encryption",
    demo: "https://encryption.demo.com",
    color: "#10b981"
  },
  {
    id: 4,
    title: "Face Recognition System",
    description: "An advanced face recognition system for attendance tracking and security purposes. Uses machine learning algorithms for accurate face detection and identification.",
    icon: FaIdCard,
    image: "/face-recognition.jpg",
    tech: ["Python", "OpenCV", "Face Recognition", "Machine Learning"],
    github: "https://github.com/prince-makani/face-recognition",
    demo: "https://face-recognition.demo.com",
    color: "#f59e0b"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono mb-3">// My Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-emerald rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group glass-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary-card to-primary-bg flex items-center justify-center overflow-hidden">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <motion.a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source code on GitHub"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary-bg border border-white/10 text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
