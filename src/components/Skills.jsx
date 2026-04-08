import React, { useState } from 'react';

function Skills() {
  const [activeTab, setActiveTab] = useState('technical');

  const techSkills = [
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React", icon: "devicon-react-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original text-gray-900 dark:text-white" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original text-gray-900 dark:text-white" },
    { name: "Postman", icon: "devicon-postman-plain colored" }
  ];

  const softSkills = [
    { name: "Communication", icon: "fas fa-comments text-violet-600 dark:text-violet-400" },
    { name: "Teamwork", icon: "fas fa-users text-violet-600 dark:text-violet-400" },
    { name: "Time Management", icon: "fas fa-clock text-violet-600 dark:text-violet-400" },
    { name: "Adaptability", icon: "fas fa-sync-alt text-violet-600 dark:text-violet-400" }
  ];

  return (
    <section
      id="skills"
      className="pb-20 pt-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        <h2
          className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          data-aos="fade-up"
        >
          My Skills
        </h2>

        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md ${
              activeTab === 'technical'
                ? 'bg-violet-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Technical Skills
          </button>

          <button
            onClick={() => setActiveTab('soft')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md ${
              activeTab === 'soft'
                ? 'bg-violet-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Soft Skills
          </button>
        </div>

        {activeTab === 'technical' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl transition-colors duration-300">
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 min-h-[150px] bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <i className={`${skill.icon} text-5xl mb-4`}></i>
                <span className="text-base font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'soft' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl transition-colors duration-300">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                <i className={`${skill.icon} text-3xl mr-4`}></i>
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Skills;
