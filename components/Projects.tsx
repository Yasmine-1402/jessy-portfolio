'use client';

import { motion } from 'framer-motion';
import { projectsData } from '@/data/content';
import { Code2, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Categorize projects
  const categories = ['Web Development', 'AI / Machine Learning', 'Desktop Applications', 'Backend Development'];

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-16 relative bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Featured
            <span className="block text-accent-blue">work & projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">Handcrafted software across full-stack, AI, and team collaboration. Each project represents intentional design and technical depth.</p>
        </motion.div>

        {/* Projects Grid - Editorial Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`group relative transition-all duration-300 ${idx % 2 === 0 ? 'md:flex' : 'md:flex md:flex-row-reverse'}`}
            >
              {/* Content Block */}
              <div className={`flex-1 p-8 rounded-lg border border-white border-opacity-10 hover:border-opacity-20 transition-all duration-300 hover:bg-white hover:bg-opacity-5 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.category === 'Personal Project' ? 'bg-accent-blue/20 text-accent-blue border border-accent-blue/50' : 'bg-accent-green/20 text-accent-green border border-accent-green/50'}`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-lg mb-6">{project.description}</p>
                  </div>
                </div>

                {/* Technologies - Refined Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-dark-800 text-gray-300 border border-white border-opacity-10 hover:border-opacity-20 transition-all">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-500">+{project.technologies.length - 4} more</span>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.keyFeatures.map((feature, fidx) => (
                      <div key={fidx} className="flex gap-2 text-sm text-gray-400">
                        <span className="text-accent-blue font-bold">→</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Highlight */}
                <div className="mb-8 p-4 rounded-lg border border-accent-blue border-opacity-30 bg-accent-blue bg-opacity-5">
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-accent-blue">Impact: </span>
                    {project.impact}
                  </p>
                </div>

                {/* Action Links */}
                <div className="flex gap-3 pt-6 border-t border-white border-opacity-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white border border-white border-opacity-20 hover:border-opacity-40 hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                  >
                    <Code2 size={16} />
                    View Code
                  </a>
                </div>
              </div>

              {/* Metadata Block */}
              <div className={`flex-shrink-0 flex flex-col justify-between p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10 md:w-40 mt-6 md:mt-0 ${idx % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Details</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Role</p>
                      <p className="text-sm font-medium text-white">{project.myRole}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Date</p>
                      <p className="text-sm font-medium text-white">{project.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Status</p>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${project.status === 'Active' ? 'bg-accent-green animate-pulse' : 'bg-gray-600'}`} />
                        <p className="text-sm font-medium text-white">{project.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-white border-opacity-10 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">Explore more on my GitHub</p>
          <a
            href="https://github.com/Yasmine-1402"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-accent-blue text-white font-semibold hover:bg-accent-blue/90 transition-all duration-300 hover:shadow-lg"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
