'use client';

import { motion } from 'framer-motion';
import { experienceData } from '@/data/content';
import { Briefcase, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  // Separate by type
  const volunteerAndLeadership = experienceData.filter((exp) => ['Leadership', 'Volunteer'].includes(exp.type));
  const internships = experienceData.filter((exp) => ['Internship', 'Virtual Experience', 'Freelance'].includes(exp.type));

  const renderExperienceSection = (title: string, experiences: typeof experienceData) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
        {experiences.map((exp) => (
          <motion.div key={exp.id} variants={itemVariants} className="glass-md p-6 rounded-lg hover-glow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                <p className="text-accent-blue font-semibold">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 flex items-center gap-2 justify-end">
                  <Calendar size={16} />
                  {exp.duration}
                </p>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="text-gray-300 flex gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/30">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span className="gradient-text">Experience & Activities</span>
          </h2>
          <p className="text-gray-400 text-lg">My professional journey and community involvement</p>
        </motion.div>

        {/* Leadership & Volunteer */}
        {renderExperienceSection('Volunteer work & leadership', volunteerAndLeadership)}

        {/* Internships & Freelance */}
        {renderExperienceSection('💼 Experience & Internships', internships)}

      </div>
    </section>
  );
};

export default Experience;
