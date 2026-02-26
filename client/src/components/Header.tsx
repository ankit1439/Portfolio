import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component
 * 
 * Design Philosophy: Cinematic Minimalism
 * - Minimal navigation with smooth transitions
 * - Sticky header with backdrop blur
 * - Mobile-responsive menu
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Fixed header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-accent/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold text-foreground"
          >
            Ankit<span className="text-accent">Joshi</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{ color: '#00d9ff' }}
                className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors duration-300 text-sm font-medium"
            >
              Get in Touch
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-accent/10"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-foreground/70 hover:text-accent transition-colors duration-300 py-2"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer block w-full px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors duration-300 text-center font-medium"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.nav>
      </motion.header>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 md:h-20" />
    </>
  );
}
