import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center h-screen bg-gradient-to-b from-blue-50 to-white px-4"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
        Hi, I'm Thrupthi H R
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-700 mb-6">
        A passionate Computer Science student and Full Stack Developer who enjoys building user-friendly web apps and solving real-world problems with technology.
      </p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
      >
        Let's Connect
      </a>
    </section>
  );
};

export default Hero;
