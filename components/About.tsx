'use client';

import { motion } from 'framer-motion';
import { profileData, educationData } from '@/data/content';
import { Code2, Share2, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-8 lg:px-16 relative bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-white">
            About
            <span className="block text-accent-blue mt-2">the person behind the code</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">Understanding the human side of software engineering</p>
        </motion.div>

        <div className="editorial-grid gap-16">
          {/* Left Content - Narrative */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                {profileData.description}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-accent-blue pl-6">
                {profileData.whyIBuild}
              </p>
            </div>

            {/* Education Cards - Refined */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">Education</h3>
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-white border-opacity-10 hover:border-opacity-20 transition-all duration-300 hover:bg-white hover:bg-opacity-5"
                >
                  <h4 className="font-semibold text-white text-lg">{edu.degree}</h4>
                  <p className="text-accent-blue text-sm mt-1 font-medium">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mt-3">{edu.major}</p>
                  <p className="text-gray-500 text-xs mt-2">Expected Graduation: {edu.expectedGraduation}</p>
                </div>
              ))}
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-4 rounded-lg border border-white border-opacity-10 hover:border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-accent-blue group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-white text-sm truncate">{profileData.email}</p>
                    </div>
                  </div>
                </a>
                <a
                  href={`tel:${profileData.phone}`}
                  className="p-4 rounded-lg border border-white border-opacity-10 hover:border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-accent-blue group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="text-white text-sm">{profileData.phone}</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-4 rounded-lg border border-white border-opacity-10 flex items-center gap-3">
                <MapPin size={20} className="text-accent-blue flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-white text-sm">{profileData.location}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Social & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Links Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Connect</h3>
              <div className="flex gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 rounded-lg border border-white border-opacity-10 hover:border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-300 group flex items-center justify-center gap-2"
                >
                  <Code2 size={20} className="text-accent-blue group-hover:scale-110 transition-transform" />
                  <span className="text-white text-sm font-medium hidden sm:inline">GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 rounded-lg border border-white border-opacity-10 hover:border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-300 group flex items-center justify-center gap-2"
                >
                  <Share2 size={20} className="text-accent-blue group-hover:scale-110 transition-transform" />
                  <span className="text-white text-sm font-medium hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '5+', label: 'Programming Languages' },
                { value: '6+', label: 'Frameworks & Tools' },
                { value: '100+', label: 'Community Members' },
                { value: '15+', label: 'Workshops Organized' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg border border-white border-opacity-10 text-center"
                >
                  <p className="text-2xl font-bold text-accent-blue">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
