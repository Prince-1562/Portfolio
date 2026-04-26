import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCheck, FaTimes } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { GITHUB_URL, LINKEDIN_URL, EMAIL, LOCATION } from '../constants'

const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // EmailJS integration - configure with your credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      setErrors({ submit: 'Failed to send message. Please try again later or contact me directly via email.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socials = [
    { icon: FaGithub, href: GITHUB_URL, label: 'GitHub' },
    { icon: FaLinkedin, href: LINKEDIN_URL, label: 'LinkedIn' }
  ]

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono mb-3">// Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-emerald rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="glass-card border border-white/5 px-6 md:px-10 py-10 md:py-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6">
                Let's <span className="gradient-text">Connect</span>
              </h3>
              <p className="text-text-secondary mb-10 leading-relaxed text-base md:text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out if you'd like to collaborate or just want to say hello!
              </p>

              <div className="space-y-4 mb-8 md:mb-10">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-2xl bg-primary-card/60 border border-white/5"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
                    <FaEnvelope className="text-accent-cyan" size={20} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">Email</p>
                    <p className="text-white font-medium">{EMAIL}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-2xl bg-primary-card/60 border border-white/5"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-emerald/20 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-accent-purple" size={20} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">Location</p>
                    <p className="text-white font-medium">{LOCATION}</p>
                  </div>
                </motion.div>
              </div>

              <div className="border-t border-white/5 pt-6 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-text-secondary">Follow me on</p>
                <div className="flex gap-3">
                  {socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 rounded-xl bg-primary-card border border-white/5 text-text-secondary hover:text-white hover:border-accent-cyan/50 transition-all"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="glass-card border border-white/5 px-6 md:px-10 py-10 md:py-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="input-field"
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="input-field"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="input-field"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="input-field resize-none"
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <AnimatePresence>
                {errors.submit && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg"
                  >
                    <FaTimes size={14} />
                    {errors.submit}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Success Toast */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                >
                  <FaCheck size={18} />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm opacity-80">I'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
