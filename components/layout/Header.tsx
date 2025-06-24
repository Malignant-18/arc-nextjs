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
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="w-full shadow-sm">
      {/* Top header with logo and login button */}
      <div className="bg-sky-100 py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                <Image 
                  src="/handshake-logo.png" 
                  alt="Alumni Connect Cell Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-sm md:text-lg font-extrabold leading-none text-gray-800 font-poppins">
                  ALUMNI
                </h1>
                <h1 className="text-sm md:text-lg font-extrabold leading-none text-gray-800 font-poppins">
                  CONNECT
                </h1>
                <h1 className="text-sm md:text-lg font-extrabold leading-none text-gray-800 font-poppins">
                  CELL
                </h1>
                <p className="text-xs text-gray-600 leading-tight">
                  GOVT. MODEL ENGINEERING COLLEGE THRIKKAKARA
                </p>
              </div>
            </Link>

            {/* Tablet/Desktop Login Button */}
            <div className="hidden sm:block">
              <Link
                href="/auth"
                className="px-3 py-2 md:px-6 md:py-3 rounded-xl bg-cyan-600 text-white text-xs md:text-sm font-medium hover:bg-cyan-700 transition-colors"
              >
                REGISTER / LOGIN
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-cyan-500 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          {/* Tablet/Desktop Navigation */}
          <nav className="hidden sm:flex items-center justify-between py-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  'px-3 py-2 md:px-6 lg:px-8 font-medium text-xs md:text-sm transition-colors text-white hover:bg-cyan-600 text-center',
                  pathname === link.path
                    ? 'bg-cyan-600'
                    : ''
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-cyan-500 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    'py-2 px-4 font-medium text-white',
                    pathname === link.path
                      ? 'bg-cyan-600'
                      : 'hover:bg-cyan-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/auth"
                className="mt-3 py-2 px-4 bg-white text-cyan-700 font-medium text-center rounded-md"
              >
                REGISTER / LOGIN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
