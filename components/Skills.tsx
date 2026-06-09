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

  const SkillChipCard = ({
    title,
    items,
    helper,
  }: {
    title: string;
    items: Array<{ name: string; icon?: string }>;
    helper: string;
  }) => (
    <motion.div
      variants={itemVariants}
      className="glass-md p-8 rounded-2xl border border-white/10 bg-white/5"
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-6">{helper}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark-900/70 px-4 py-2 text-sm text-white"
          >
            {skill.icon && <span>{skill.icon}</span>}
            {skill.name}
          </span>
        ))}
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
          <p className="text-gray-400 text-lg">A clearer view of what I use often, what I can ship with, and what I’m actively expanding</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          <SkillChipCard
            title="Proficient"
            helper="Technologies I use to build and ship confidently"
            items={skillsData.proficient}
          />
          <SkillChipCard
            title="Familiar"
            helper="Tools and frameworks I can ramp into quickly"
            items={skillsData.familiar}
          />
          <SkillChipCard
            title="Supporting Tools"
            helper="The rest of the stack I use to stay productive"
            items={skillsData.supporting}
          />
          <motion.div
            variants={itemVariants}
            className="glass-md p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-accent-blue/10 to-transparent"
          >
            <h3 className="text-xl font-bold text-white mb-2">Focus Areas</h3>
            <p className="text-sm text-gray-400 mb-6">The problems and product themes I’m leaning into right now</p>
            <div className="flex flex-wrap gap-3">
              {skillsData.focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-accent-blue/20 bg-accent-blue/10 px-4 py-2 text-sm text-white">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
