import React from 'react';

function Resume() {

  //Exact file
  const resumeFile = "/Karan_Gangwal_Resume.pdf";

  return (
    <section
      id="resume"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          My Resume
        </h2>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg" data-aos="zoom-in">
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Want to explore more about my skills, projects, and experience? Check out my resume below.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

            {/* View Button */}
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
            >
              View Resume
            </a>

            {/* Download Button */}
            <a
              href={resumeFile}
              download
              className="px-6 py-3 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-600 hover:text-white transition"
            >
              Download PDF
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;