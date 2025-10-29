import React from "react";
import personImage from "../../Asset/personImage.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Body = () => {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white pt-24 px-6 sm:px-16 flex flex-col md:flex-row items-center justify-center md:justify-evenly space-y-16 md:space-y-0">
      <div className="flex flex-col items-center">
        <img
          src={personImage}
          alt="Bhupati Nadar"
          className="rounded-full w-72 h-72 sm:w-80 sm:h-80 object-cover shadow-lg shadow-cyan-900/40"
        />
        <div className="h-10"></div>
        <div className="flex gap-8 mt-10">
          <a
            href="https://github.com/BhupatiNadar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110 duration-200"
          >
            <FaGithub size={40} />
          </a>

          <a
            href="https://www.linkedin.com/in/bhupati-nadar-145013348/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110 duration-200"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>

      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-xl sm:text-2xl font-light mb-2">Hello, I'm</h1>
        <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
          Bhupati Nadar
        </h1>
        <h2 className="text-3xl sm:text-5xl font-semibold mt-4">
          A second-year Engineering student specializing in
        </h2>
        <h2 className="text-3xl sm:text-5xl font-semibold mb-6 text-cyan-400">
          Artificial Intelligence & Data Science
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a passionate{" "}
          <span className="font-semibold text-white">Software Developer</span>
          who loves building <span className="text-cyan-400">robust</span> and
          <span className="text-cyan-400"> scalable</span> web applications, and
          exploring
          <span className="text-cyan-400"> AI-driven technologies</span>.
        </p>
      </div>
    </div>
  );
};

export default Body;
