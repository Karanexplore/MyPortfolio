import React from 'react';

function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Education</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute hidden md:block h-full w-1 bg-violet-300 dark:bg-neon-600 left-1/2 transform -translate-x-1/2"></div>

          {/* Education Item 1: B.Tech */}
          <div className="mb-8 flex justify-between items-center w-full md:left-timeline" data-aos="fade-right">
            <div className="md:order-1 w-full md:w-5/12 text-center md:text-right">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">B.Tech in Computer Science Engineering</h3>
                <p className="text-violet-600 dark:text-neon-500 font-medium">Sage University, Indore</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">2022 - 2026 (Expected)</p>
              </div>
            </div>
            <div className="md:order-2 w-1/12 md:flex justify-center hidden">
              {/* Dot on timeline is handled by global.css pseudo-element */}
            </div>
          </div>

          {/* Education Item 2: 12th */}
          <div className="mb-8 flex justify-between items-center w-full md:right-timeline" data-aos="fade-left">
            <div className="md:order-2 w-full md:w-5/12 text-center md:text-left">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Higher Secondary Education (12th)</h3>
                <p className="text-violet-600 dark:text-neon-500 font-medium">MP Board</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">2022</p>
                <i className="fas fa-graduation-cap text-violet-600 dark:text-neon-500 text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
              </div>
            </div>
            <div className="md:order-1 w-1/12 md:flex justify-center hidden">
              {/* Dot on timeline */}
            </div>
          </div>

          {/* Education Item 3: 10th */}
          <div className="mb-8 flex justify-between items-center w-full md:left-timeline" data-aos="fade-right">
            <div className="md:order-1 w-full md:w-5/12 text-center md:text-right">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Secondary Education (10th)</h3>
                <p className="text-violet-600 dark:text-neon-500 font-medium">MP Board</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">2020</p>
                <i className="fas fa-school text-violet-600 dark:text-neon-500 text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
              </div>
            </div>
            <div className="md:order-2 w-1/12 md:flex justify-center hidden">
              {/* Dot on timeline */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;