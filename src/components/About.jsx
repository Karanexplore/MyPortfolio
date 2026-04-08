import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="pt-20 pb-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto text-center leading-relaxed">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I am a <strong>MERN Stack Developer</strong> and a B.Tech Computer Science student at 
            <strong> SAGE University, Indore</strong>. I specialize in building responsive and user-friendly 
            web applications using <strong>MongoDB, Express.js, React, and Node.js</strong>.
            
            <br /><br />

            I am passionate about creating clean and efficient code, and I continuously work on improving 
            my skills by building real-world projects like travel platforms and dynamic web applications. 
            I am always eager to learn new technologies and contribute to innovative and impactful projects.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;