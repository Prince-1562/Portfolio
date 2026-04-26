import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from 'react-icons/fa'
import { GITHUB_URL, LINKEDIN_URL } from '../constants'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-primary-bg border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <span className="font-display text-lg font-bold text-white">PM</span>
              </div>
              <span className="font-display text-lg font-semibold text-white">
                Prince Makani
              </span>
            </motion.a>
            <p className="text-text-secondary text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: GITHUB_URL, label: 'GitHub' },
              { icon: FaLinkedin, href: LINKEDIN_URL, label: 'LinkedIn' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-primary-card border border-white/5 text-text-secondary hover:text-white hover:border-accent-cyan/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-card border border-white/5 text-text-secondary hover:text-white hover:border-accent-cyan/30 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">Back to Top</span>
            <FaArrowUp size={14} />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
          <div className="flex items-center gap-4">
            <span>Information Security Analyst</span>
            <span className="w-1 h-1 rounded-full bg-accent-cyan" />
            <span>Web Developer</span>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
    </footer>
  )
}

export default Footer
