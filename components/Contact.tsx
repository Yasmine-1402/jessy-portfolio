'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/content';
import { Mail, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 border border-white/10 rounded-full opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 border border-white/5 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-accent-blue/30 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Minimal heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Get in touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-green mx-auto"></div>
        </motion.div>

        {/* Contact options - Grid layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Email Card */}
          <motion.a
            href={`mailto:${profileData.email}`}
            whileHover={{ scale: 1.02 }}
            className="group relative p-8 border border-white/10 rounded-lg hover:border-accent-blue/30 transition-all duration-300 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Geometric accent */}
            <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent-blue/10 border border-accent-blue/20 group-hover:bg-accent-blue/20 transition-all">
                <Mail size={24} className="text-accent-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Me</h3>
                <p className="text-gray-400 text-sm">{profileData.email}</p>
              </div>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="group relative p-8 border border-white/10 rounded-lg hover:border-accent-green/30 transition-all duration-300 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Geometric accent */}
            <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-accent-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent-green/10 border border-accent-green/20 group-hover:bg-accent-green/20 transition-all">
                <Linkedin size={24} className="text-accent-green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Connect on LinkedIn</h3>
                <p className="text-gray-400 text-sm">Let's connect professionally</p>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Divider with dots */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20"></div>
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20"></div>
        </div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={profileData.resume}
            download
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 rounded-lg text-white font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300 group"
          >
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
