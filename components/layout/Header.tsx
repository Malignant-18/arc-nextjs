'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'EVENTS', path: '/events' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'TEAM', path: '/team' },
  { name: 'CONTACT', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-500 ease-out px-4",
        scrolled 
          ? "backdrop-blur-lg" 
          : ""
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={cn(
        "bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50"
      )}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary-400/40 group-hover:ring-primary-500/60 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image 
                  src="/handshake-logo.png" 
                  alt="Alumni Relations Cell Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="text-lg font-bold leading-none text-gray-800 group-hover:text-primary-700 transition-colors duration-300">
                  ALUMNI RELATIONS CELL
                </h1>
                <p className="text-xs text-gray-600 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                  MEC
                </p>
              </div>
            </Link>

            {/* Tablet/Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      href={link.path}
                      className={cn(
                        'block px-4 py-2 font-medium text-sm rounded-lg transition-all duration-300 relative overflow-hidden',
                        pathname === link.path
                          ? 'text-white bg-primary-600 shadow-lg'
                          : 'text-gray-700 hover:text-primary-600'
                      )}
                    >
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  </motion.div>
                  
                  {pathname !== link.path && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} className="text-gray-700" /> : <Menu size={20} className="text-gray-700" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mt-2 max-w-7xl mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
              <div className="p-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.05 * index, duration: 0.2 }}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={link.path}
                        className={cn(
                          'block py-3 px-4 font-medium rounded-lg transition-all duration-300 relative overflow-hidden',
                          pathname === link.path
                            ? 'bg-primary-600 text-white shadow-lg'
                            : 'text-gray-700 hover:text-primary-600'
                        )}
                      >
                        <span className="relative z-10">{link.name}</span>
                      </Link>
                    </motion.div>
                    
                    {pathname !== link.path && (
                      <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
