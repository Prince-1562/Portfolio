import { motion } from 'framer-motion'
import { FaShieldAlt, FaCode, FaUserGraduate, FaAward } from 'react-icons/fa'

const stats = [
  { icon: FaUserGraduate, label: 'Degree', value: 'IMCA' },
  { icon: FaShieldAlt, label: 'Focus', value: 'Cybersecurity' },
  { icon: FaCode, label: 'Projects', value: '8+' },
  { icon: FaAward, label: 'Experience', value: 'Fresher' }
]

const About = () => {
  return (
    <section id='about' className='section-padding relative'>
      <div className='container mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='font-display text-4xl md:text-5xl font-bold text-white mb-4'>
            About <span className='gradient-text'>Me</span>
          </h2>
          <div className='w-24 h-1 mx-auto bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-emerald rounded-full' />
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className='relative'>
              <motion.div
                className='absolute -top-4 -left-4 w-24 h-24 border-2 border-accent-cyan/30 rounded-lg'
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className='absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent-purple/30 rounded-lg'
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              <div className='glass-card p-8 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5' />
                <div className='relative z-10'>
                  <div className='w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10'>
                    <img
                      src='/profile.jpg'
                      alt='Prince Makani'
                      className='w-full h-full object-cover'
                      loading='lazy'
                      decoding='async'
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className='font-display text-2xl md:text-3xl font-semibold text-white mb-6'>
              Information Security Analyst & <span className='gradient-text'>Web Developer</span>
            </h3>

            <p className='text-text-secondary text-lg mb-6 leading-relaxed'>
              I'm a passionate Information Security Analyst and Web Developer based in Vadodara, Gujarat.
              With a strong foundation in cybersecurity principles and modern web technologies, I specialize
              in building secure, scalable, and user-friendly applications.
            </p>

            <p className='text-text-secondary text-lg mb-8 leading-relaxed'>
              My journey in technology began with a keen interest in understanding how systems work
              and how to protect them from threats. This led me to pursue a career that combines
              <span className='text-accent-cyan'> web development</span> with
              <span className='text-accent-purple'> information security</span>, allowing me to create
              applications that are not only functional but also secure by design.
            </p>

            <div className='grid grid-cols-2 gap-4'>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className='glass-card p-4 flex items-center gap-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center'>
                    <stat.icon className='text-accent-cyan' size={20} />
                  </div>
                  <div>
                    <p className='text-text-secondary text-sm'>{stat.label}</p>
                    <p className='font-display text-lg font-semibold text-white'>{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About