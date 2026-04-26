import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
  {
    id: 1,
    company: "Shadow Fox",
    role: "Information Security Analyst Intern",
    duration: "June 2024 - August 2024",
    location: "Remote",
    description: [
      "Conducted vulnerability assessments and penetration testing on web applications",
      "Implemented security protocols and best practices for data protection",
      "Analyzed security logs and identified potential threats",
      "Assisted in incident response and security awareness training"
    ],
    skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "SIEM"],
    color: "#00d4ff"
  },
  {
    id: 2,
    company: "Pinnacle Labs",
    role: "Cyber Security Intern",
    duration: "January 2024 - March 2024",
    location: "Vadodara, Gujarat",
    description: [
      "Conducted vulnerability assessments and security audits on internal systems",
      "Implemented security protocols and best practices for data protection",
      "Analyzed security logs and identified potential threats",
      "Assisted in incident response and security awareness training"
    ],
    skills: ["Network Security", "Vulnerability Assessment", "SIEM", "Firewalls", "Penetration Testing"],
    color: "#7c3aed"
  }
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative bg-primary-bg">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono mb-3">// Career Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-emerald rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-emerald" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple transform -translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: exp.color }} />
                </div>

                {/* Content Side */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="glass-card p-6 relative overflow-hidden"
                    whileHover={{ scale: 1.02, y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient Border */}
                    <div 
                      className="absolute top-0 left-0 w-full h-1"
                      style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
                    />

                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-accent-cyan font-medium">{exp.company}</p>
                      </div>
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${exp.color}20` }}
                      >
                        <FaBriefcase style={{ color: exp.color }} />
                      </div>
                    </div>

                    {/* Duration & Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-text-secondary">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt size={12} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt size={12} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                          <span 
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: exp.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-primary-bg border border-white/10 text-text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Note */}
        <motion.p
          className="text-center text-text-secondary mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          More experience coming soon. Always open to new opportunities!
        </motion.p>
      </div>
    </section>
  )
}

export default Experience
