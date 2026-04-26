import { motion } from 'framer-motion'
import { 
  FaReact, FaJs, FaNodeJs, FaDatabase, FaPython, FaLinux, 
  FaGitAlt, FaDocker, FaShieldAlt, FaHtml5, FaCss3 
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiTypescript, 
  SiNextdotjs, SiVercel, SiPostman 
} from 'react-icons/si'

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, level: 90, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJs, level: 85, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, level: 75, color: "#3178C6" },
      { name: "HTML/CSS", icon: FaHtml5, level: 95, color: "#E34F26" },
      { name: "Tailwind", icon: SiTailwindcss, level: 90, color: "#06B6D4" },
      { name: "Next.js", icon: SiNextdotjs, level: 70, color: "#FFFFFF" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 85, color: "#339933" },
      { name: "Express", icon: SiExpress, level: 80, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, level: 75, color: "#47A248" },
      { name: "SQL", icon: FaDatabase, level: 70, color: "#00758F" },
    ]
  },
  {
    title: "Tools & Security",
    skills: [
      { name: "Python", icon: FaPython, level: 75, color: "#3776AB" },
      { name: "Linux", icon: FaLinux, level: 80, color: "#FCC624" },
      { name: "Git", icon: FaGitAlt, level: 85, color: "#F05032" },
      { name: "Docker", icon: FaDocker, level: 65, color: "#2496ED" },
      { name: "Cybersecurity", icon: FaShieldAlt, level: 75, color: "#10B981" },
      { name: "Postman", icon: SiPostman, level: 80, color: "#FF6C37" },
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-primary-bg">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono mb-3">// Skills & Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-emerald rounded-full" />
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="font-display text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded-full bg-gradient-to-b from-accent-cyan to-accent-purple" />
                {category.title}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card p-4 group hover:border-accent-cyan/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <skill.icon className="text-xl" style={{ color: skill.color }} />
                        </div>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-text-secondary text-sm font-mono">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-primary-bg rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-text-secondary">
            Always learning and exploring new technologies to stay updated with the latest trends in cybersecurity and web development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
