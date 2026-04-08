import React, { createContext, useState, useEffect } from 'react';


export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {

  //  Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

// projects
  const projectsData = [
    {
      id: 1,
      title: "Wanderlust",
      desc: "A full-stack travel web application where users can explore, add and review destinations with authentication and dynamic routing.",
      image: "/wanderlust.png",
      tech: ["MongoDB", "Express", "React", "Node"],
      githubLink: "https://github.com/Karanexplore",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Weather App",
      desc: "A responsive weather application that shows real-time weather updates using API integration.",
      image: "/weather.png",
      tech: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Karanexplore",
      liveLink: "#"
    }
  ];

  return (
    <PortfolioContext.Provider
      value={{ isDarkMode, toggleTheme, projectsData }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};