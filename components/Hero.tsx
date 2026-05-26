'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code2, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { profileData } from '@/data/content';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      {/* Geometric background elements - AI design inspired */}
      <div className="absolute top-20 right-10 w-96 h-96 border border-white/5 rounded-full opacity-30"></div>
      <div className="absolute top-40 right-20 w-64 h-64 border border-white/5 rounded-full opacity-20"></div>
      <div className="absolute bottom-32 -left-32 w-96 h-96 border-l border-t border-white/10 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-1 h-40 bg-gradient-to-t from-accent-blue/20 to-transparent opacity-50"></div>

      {/* Main Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* Left side - Text content */}
        <div>
          {/* Subtle intro tag */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-sm font-medium text-accent-blue uppercase tracking-widest">
              Software Engineer • Community Leader
            </span>
          </motion.div>

          {/* Main Heading - Minimalist style */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-6xl font-bold leading-tight text-white">
              Yasmine
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-green">
                Shehata
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 font-light mb-12 max-w-lg leading-relaxed"
          >
            Building thoughtful software that matters. I blend technical depth with creative thinking—architecting 
            systems, mentoring communities, and exploring AI-driven solutions.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-start mb-16">
            <Link
              href="#projects"
              className="group px-8 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-accent-blue whitespace-nowrap"
            >
              View My Work
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </Link>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <Code2 size={18} />
              GitHub
            </a>
            <a
              href={profileData.resume}
              download
              className="px-6 py-3 border border-accent-green/30 text-white font-semibold rounded-lg hover:border-accent-green hover:bg-accent-green/5 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right side - Photo with geometric frame */}
        <motion.div
          variants={itemVariants}
          className="relative h-96 sm:h-[500px] lg:h-[600px] hidden lg:flex items-center justify-center"
        >
          {/* Geometric background shapes */}
          <div className="absolute inset-0 opacity-50">
            {/* Top-right corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-accent-blue/30"></div>
            {/* Bottom-left corner accent */}
            <div className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-accent-green/30"></div>
            {/* Side line accents */}
            <div className="absolute right-0 top-1/3 w-1 h-32 bg-gradient-to-b from-accent-blue/20 to-transparent"></div>
            <div className="absolute left-0 bottom-1/4 w-1 h-40 bg-gradient-to-t from-accent-green/20 to-transparent"></div>
          </div>

          {/* Photo with frame */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-72 h-96 sm:w-80 sm:h-[500px] lg:w-96 lg:h-[600px] rounded-lg overflow-hidden border border-white/10 shadow-2xl z-10"
          >
            <Image
              src="/photo.png"
              alt="Yasmine Shehata"
              fill
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-950/40"></div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-8 right-8 w-16 h-16 border border-accent-blue/30 rounded-lg opacity-50 z-0"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-12 left-8 w-20 h-20 border border-accent-green/20 rounded-full opacity-40 z-0"
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="flex justify-center mt-20 absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-gray-500 hover:text-accent-blue transition-colors cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
