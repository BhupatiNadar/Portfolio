import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/HomePage/Header";
import Body from "./Components/HomePage/Body";
import About from "./Components/AboutMe/About";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import ContactMe from "./Components/ContactMe/ContactMe";

const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header
              onAboutClick={() => scrollToSection(aboutRef)}
              onProjectsClick={() => scrollToSection(projectsRef)}
              onContactClick={() => scrollToSection(contactRef)}
            />
            <Body />
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={projectsRef}>
              <ProjectPage />
            </div>
            <div ref={contactRef}>
              <ContactMe />
            </div>
          </>
        }
      />
    </Routes>
  );
};

export default App;
