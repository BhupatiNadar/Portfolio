import React from 'react'
import { Routes, Route } from "react-router-dom";


import Header from "./Components/HomePage/Header";
import Body from "./Components/HomePage/Body"

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header/>
            <Body/>
          </>
        }
      />
    </Routes>
  );
}

export default App