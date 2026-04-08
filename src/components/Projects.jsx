import React from 'react';
import wanderlustImg from "../assets/wanderlust.png";
import weatherImg from "../assets/weather.png";

function Projects() {

  const projectsData = [
    {
      id: 1,
      title: "Wanderlust",
      image: wanderlustImg,
      tech: ["MongoDB", "Express", "Node", "EJS", "CSS"],
      desc: "A full-stack travel web application where users can explore, add, and review destinations with authentication and dynamic routing.",
      liveLink: "https://wanderlust-r4oc.onrender.com/listings",
      githubLink: "https://github.com/Karanexplore"
    },
    {
      id: 2,
      title: "Weather App",
      image: weatherImg,
      tech: ["JavaScript", "React.js", "Tailwind CSS","OpenWeather API"],
      desc: "A responsive weather application that provides real-time weather updates and forecasts using API integration.",
      liveLink: "#",
      githubLink: "https://github.com/Karanexplore"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">

      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100" data-aos="fade-up">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              data-aos="zoom-in"
            >

              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-violet-100 text-violet-600 rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  {project.desc}
                </p>

                {/* Links */}
                <div className="mt-auto flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-violet-600 px-3 py-1 rounded hover:bg-violet-700"
                  >
                    Live Demo
                  </a>

                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github text-xl"></i>
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;