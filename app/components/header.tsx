'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";



const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/packages', label: 'Packages' },
  { href: '/contact', label: 'Contact Us' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-black sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            href="/"
           className="hover:scale-105 transition-transform duration-300"
          >
            <Image
    src="/Travaroundlogo.png"
    alt="Travaround Logo"
    width={180}
    height={40}
    priority
  />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white font-medium hover:text-yellow-400 transition-colors duration-300 relative group text-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop: Phone + Book Now */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+917093196599"
              className="flex items-center gap-1.5 text-yellow-400 font-semibold text-sm hover:text-white transition-colors duration-300"
            >
              📞 +91 7093196599
            </a>
            <Link
              href="/book"
              className="bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-yellow-400/50"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile: Book Now + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:+917093196599"
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-xs border-2 border-yellow-400 hover:bg-transparent hover:text-yellow-400 transition-all duration-300"
            >
              📞 Call Us
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-sm border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-medium py-3 px-4 rounded-xl hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-200 text-sm border border-transparent hover:border-yellow-400/20"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
