import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-300 dark:border-emerald-900/30 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse-slow"></div>
          <span className="text-xl font-bold text-slate-800 dark:text-slate-100 font-mono tracking-tighter">
            S.BHUNIA<span className="text-emerald-500 mx-2">//</span>SECURITY
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xs font-mono font-bold text-slate-500 dark:text-emerald-500/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 uppercase tracking-widest relative group"
            >
              <span className="group-hover:before:content-['['] group-hover:after:content-[']'] before:mr-1 after:ml-1 before:opacity-0 after:opacity-0 group-hover:before:opacity-100 group-hover:after:opacity-100 transition-all">
                {link.name}
              </span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-slate-800 dark:text-emerald-400 text-xl cursor-pointer border border-slate-300 dark:border-emerald-800 p-2 rounded-sm" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-emerald-900 md:hidden flex flex-col items-center py-6 shadow-2xl"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={toggleMenu}
                className="py-3 text-sm font-mono font-bold text-slate-600 dark:text-emerald-500/80 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-300 tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
