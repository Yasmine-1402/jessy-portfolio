'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/content';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const SkillBar = ({
    name,
    level,
    icon,
  }: {
    name: string;
    level: number;
    icon?: string;
  }) => (
    <motion.div variants={itemVariants} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-2xl">{icon}</span>}
          <span className="font-semibold text-white text-sm">{name}</span>
        </div>
        <span className="text-xs text-accent-blue font-bold">{level}%</span>
      </div>
      <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-accent-blue to-accent-green rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Programming Languages */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-md p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🔤</span> Languages
            </h3>
            {skillsData.languages.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>

          {/* Frameworks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-md p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🏗️</span> Frameworks
            </h3>
            {skillsData.frameworks.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>

          {/* Databases */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-md p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🗄️</span> Databases
            </h3>
            {skillsData.databases.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-md p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🛠️</span> Tools
            </h3>
            {skillsData.tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
