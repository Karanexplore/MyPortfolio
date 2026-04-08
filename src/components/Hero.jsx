import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Hero() {
  const typedTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTarget.current, {
      strings: [
        "I build responsive web applications.",
        "Turning ideas into real-world projects."
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="
        h-screen flex items-center justify-center text-white
        bg-gradient-to-br from-blue-700 to-violet-800
        dark:bg-none dark:bg-[#0f1f4a]
      "
    >
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* PROFILE IMAGE */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
          <img
            src="/hero.jpg"
            alt="Karan Gangwal"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Karan Gangwal
          </h1>

          <p className="text-xl font-semibold mb-3">
            MERN Stack Developer | Software Engineer
          </p>

          <p className="text-lg">
            <span ref={typedTarget}></span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;
