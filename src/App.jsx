import React from 'react'
import { Routes, Route } from "react-router-dom";


import Header from "./Components/HomePage/Header";
import Body from "./Components/HomePage/Body"
import About from './Components/AboutMe/About';
import ProjectPage from './Components/ProjectPage/ProjectPage';
import ContactMe from './Components/ContactMe/ContactMe';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header/>
            <Body/>
            <About/>
            <ProjectPage/>
            <ContactMe/>
          </>
        }
      />
    </Routes>
  );
}

export default App