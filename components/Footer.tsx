'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { profileData } from '@/data/content';
import { Code2, Share2, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Code2, href: profileData.github, label: 'GitHub' },
    { icon: Share2, href: profileData.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${profileData.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-dark-900/50 backdrop-blur-xl border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="group">
              <div className="text-2xl font-bold gradient-text mb-2">YS</div>
            </Link>
            <p className="text-sm text-gray-400">
              Yasmine Shehata - Software Engineer & Community Leader
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-sm text-gray-400 hover:text-accent-blue transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-sm text-gray-400 hover:text-accent-blue transition-colors"
                >
                  Phone
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-400">{profileData.location}</span>
              </li>
            </ul>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Highlights</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• 9+ Projects Built</li>
              <li>• 3+ Tech Internships</li>
              <li>• GDG Leadership</li>
              <li>• 100+ Community Members</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 text-center md:text-left"
          >
            <span className="flex items-center justify-center md:justify-start gap-1">
              © {currentYear} Yasmine Shehata. Made with <Heart size={16} className="text-red-500" /> and{' '}
              <span className="text-accent-blue">code</span>.
            </span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="p-2 rounded-lg glass-md text-gray-400 hover:text-accent-blue hover:scale-110 transition-all"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 rounded-lg glass-md text-gray-400 hover:text-accent-blue hover:scale-110 transition-all hidden lg:block hover-glow"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7-7m0 0l-7 7m7-7v12"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
