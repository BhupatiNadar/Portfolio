import React from "react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Spring Boot",
    "Python",
    "MySQL",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <div className="w-full min-h-screen bg-slate-800 text-white flex items-center justify-center p-6 md:p-12 font-sans">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 max-w-6xl w-full">
        <div className="flex-1 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white font-mono text-center lg:text-left">
            About Me
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 mb-10 text-center lg:text-left">
            I’m a second-year Engineering student in Artificial Intelligence and
            Data Science with a passion for web development and AI technologies.
            I enjoy creating responsive and efficient web applications using
            React, Tailwind CSS, and Spring Boot, and I’m always eager to learn
            and explore new technologies.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-white text-center lg:text-left">
            Experience
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 text-center lg:text-left">
            I’ve built several projects involving frontend design, backend
            integration, and database management. My experience includes working
            with React, Java, Spring Boot, MySQL, and Python, focusing on
            building clean, scalable, and user-friendly applications.
          </p>
        </div>
        <div className="hidden lg:block w-px bg-slate-700 self-stretch"></div>

        <div className="flex-1 w-full">
          <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Skills:
          </h2>
          <div className="bg-slate-800/50 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-700">
            <ul className="h-60 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-slate-800 text-gray-200 font-medium py-3 px-4 rounded-lg shadow-md hover:bg-slate-700 hover:scale-105 hover:text-white transition-all duration-300 cursor-pointer text-center"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
