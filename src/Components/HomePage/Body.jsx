import React from "react";
import personImage from  "../../Asset/personImage.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Body = () => {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white pt-24 px-4 sm:px-16 flex flex-col md:flex-row items-center justify-center md:justify-evenly space-y-16 md:space-y-0">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <img
            src={personImage}
            alt="Bhupati Nadar"
            className="rounded-full w-80 h-80 object-cover"
          />
        </div>
        <div className="h-16"></div>
        <div className="flex gap-8">
          <a
            href="https://github.com/BhupatiNadar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaGithub size={40} />
          </a>

          <a
            href="https://www.linkedin.com/in/bhupati-nadar-145013348/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-xl sm:text-2xl font-light mb-2">Hello, I'm</h1>
        <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
          Bhupati Nadar
        </h1>
        <h1 className="text-4xl sm:text-6xl font-semibold mt-4">
          I'm a Software
        </h1>
        <h1 className="text-4xl sm:text-6xl font-semibold mb-6 text-cyan-400">
          Developer
        </h1>
        <p className="text-lg max-w-lg mx-auto md:mx-0 text-gray-300">
          I'm a <strong>Software Developer</strong> with a passion for building
          robust and scalable web applications.
        </p>
      </div>
    </div>
  );
};

export default Body;
