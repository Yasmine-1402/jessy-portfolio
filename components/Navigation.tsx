'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-2xl font-bold gradient-text">
              <span className="hover-glow">YS</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-green group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg bg-accent-blue text-white text-sm font-semibold hover-glow"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg glass-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden absolute top-full left-0 right-0 glass-md mt-4 p-4 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => {
                  scrollToSection(item.href.slice(1));
                  setIsOpen(false);
                }}
                className="text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                {item.label}
              </motion.button>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-accent-blue text-white text-sm font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
