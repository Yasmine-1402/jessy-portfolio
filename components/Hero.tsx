'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code2, Download, Linkedin } from 'lucide-react';
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

  const featuredStats = [
    { value: '80+', label: 'Members led' },
    { value: '20+', label: 'Students mentored' },
    { value: '250+', label: 'Community members impacted' },
    { value: '9+', label: 'Projects built' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      {/* Geometric background elements - AI design inspired */}
      <div className="absolute top-20 right-10 w-96 h-96 border border-white/5 rounded-full opacity-30"></div>
      <div className="absolute top-40 right-20 w-64 h-64 border border-white/5 rounded-full opacity-20"></div>
      <div className="absolute bottom-32 -left-32 w-96 h-96 border-l border-t border-white/10 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-1 h-40 bg-gradient-to-t from-accent-blue/20 to-transparent opacity-50"></div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full z-10"
      >
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {/* Decorative border accents */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute top-0 right-0 h-24 w-24 border-r border-t border-accent-blue/30" />
            <div className="absolute bottom-0 left-0 h-24 w-24 border-l border-b border-accent-green/30" />
          </div>

          <div className="relative z-10 flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <motion.div
                variants={itemVariants}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative mx-auto lg:mx-0 w-32 h-40 sm:w-40 sm:h-48 lg:w-40 lg:h-52 shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-dark-900 shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
              >
                <Image
                  src="/photo.png"
                  alt="Yasmine Shehata"
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 160px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-950/25" />
              </motion.div>

              <div className="flex-1 text-center lg:text-left">
                <motion.div variants={itemVariants} className="mb-4">
                  <span className="text-sm font-medium text-accent-blue uppercase tracking-[0.28em]">
                    Software Engineering Student • GDG on Campus Lead
                  </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
                  Yasmine
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-green">
                    Shehata
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="mt-6 text-lg sm:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mx-auto lg:mx-0"
                >
                  {profileData.tagline}
                </motion.p>
              </div>
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {featuredStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-white/10 bg-dark-900/70 p-4 sm:p-5 shadow-[0_16px_50px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-accent-blue to-accent-green mb-4 opacity-80" />
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gray-400 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center lg:justify-start">
              <Link
                href="#projects"
                className="group px-8 py-3 bg-accent-blue text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-accent-blue whitespace-nowrap"
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </Link>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                <Code2 size={18} />
                GitHub
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={profileData.resume}
                download
                className="px-6 py-3 border border-accent-green/30 text-white font-semibold rounded-full hover:border-accent-green hover:bg-accent-green/5 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>
          </div>
        </div>
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
