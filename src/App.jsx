import React from 'react'
import { Routes, Route } from "react-router-dom";


import Header from "./Components/HomePage/Header";
import Body from "./Components/HomePage/Body"
import About from './Components/AboutMe/About';

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
          </>
        }
      />
    </Routes>
  );
}

export default App