import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PortfolioProvider } from './context/PortfolioContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <PortfolioProvider>
      <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-poppins transition-colors duration-300 min-h-screen">

        {/* Navbar */}
        <Navbar />

        <main>

          {/* Hero - Karan Gangwal | MERN Developer */}
          <Hero />

          {/* About - based on your resume */}
          <About />

          {/* Skills - MERN + Java + DB */}
          <Skills />

          {/* Projects - Wanderlust & Weather App */}
          <Projects />

          {/* Experience - Coding Blocks Internship */}
          <Experience />

          {/* Education - SAGE University */}
          <Education />

          {/* Certifications */}
          <Certifications />

          {/* Resume Download */}
          <Resume />

          {/* Contact - EmailJS */}
          <Contact />

        </main>

        {/* Footer */}
        <Footer />

      </div>
    </PortfolioProvider>
  );
}

export default App;