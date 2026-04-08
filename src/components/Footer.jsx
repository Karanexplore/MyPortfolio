import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-8 text-center">

      <div className="container mx-auto px-4">

        {/* Links + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">

          {/* Navigation */}
          <ul className="flex space-x-6 mb-4 md:mb-0">
            <li><a href="#hero" className="hover:text-violet-400">Home</a></li>
            <li><a href="#about" className="hover:text-violet-400">About</a></li>
            <li><a href="#projects" className="hover:text-violet-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-violet-400">Contact</a></li>
          </ul>

          {/* Social Links */}
          <div className="flex space-x-4 text-2xl">

            <a
              href="https://www.linkedin.com/in/karan-gangwal-b1b185330/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/Karanexplore"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://instagram.com/karann__gangwal/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400"
            >
              <i className="fab fa-instagram"></i>
            </a>

          </div>

        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Karan Gangwal. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;