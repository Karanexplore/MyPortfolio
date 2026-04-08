import React from 'react';

function Certifications() {
  const certs = [
    { title: "Full Stack Development", org: "Coding Blocks", icon: "fas fa-certificate" },
    { title: "Web Development", org: "Sage Winter School", icon: "fas fa-desktop" },
    { title: "Web Development", org: "Debugshala", icon: "fas fa-brain" },
    { title: "Nodejs beast restful API", org: "Devtown", icon: "fas fa-file-code" }
  ];

  return (
    <section id="courses" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Certifications & Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <div 
              key={index} 
              className="certification-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" 
              data-aos="fade-left" 
              data-aos-delay={index * 100}
            >
              <i className={`${cert.icon} text-violet-600 dark:text-neon-500 text-4xl`}></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{cert.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;