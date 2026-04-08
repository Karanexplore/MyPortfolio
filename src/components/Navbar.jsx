import React, { useState, useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(PortfolioContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-md z-50 transition-all duration-300">

      <nav className="w-full px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a
          href="#hero"
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent tracking-wide"
        >
          Karan Gangwal
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-[17px] font-medium">
          <a href="#hero" className="text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition">Home</a>
          <a href="#about" className="text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition">About</a>
          <a href="#projects" className="text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition">Projects</a>
          <a href="#experience" className="text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition">Experience</a>
          <a href="#education" className="text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition">Education</a>
          <a href="#contact" className="text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition">Contact</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <a
            href="#resume"
            className="px-5 py-2.5 bg-violet-600 text-white text-sm md:text-base rounded-lg shadow-md hover:bg-violet-700 hover:scale-105 transition-all"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-lg hover:scale-110 transition-all"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-3xl text-gray-700 dark:text-white"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-white dark:bg-gray-800 py-4 shadow-lg transition-all duration-300`}
      >
        <a href="#hero" onClick={closeMenu} className="block px-6 py-3 text-lg text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400">Home</a>
        <a href="#about" onClick={closeMenu} className="block px-6 py-3 text-lg text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400">About</a>
        <a href="#projects" onClick={closeMenu} className="block px-6 py-3 text-lg text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400">Projects</a>
        <a href="#experience" onClick={closeMenu} className="block px-6 py-3 text-lg text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400">Experience</a>
        <a href="#education" onClick={closeMenu} className="block px-6 py-3 text-lg text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400">Education</a>
        <a href="#contact" onClick={closeMenu} className="block px-6 py-3 text-lg text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400">Contact</a>
      </div>

    </header>
  );
}

export default Navbar;