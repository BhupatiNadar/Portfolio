import React from "react";

const Header = () => {
const EventHandler=()=>{
    console.log("Hello")
  }
  return (
    <>
      <header className="w-full h-24 bg-black flex justify-between items-center px-16">
        <div className="text-amber-50 font-bold text-5xl">Portfolio</div>
        <nav className="pr-20">
          <ul className="flex gap-12 text-amber-50 text-lg">
            <li className="cursor-pointer hover:text-amber-300" onClick={EventHandler}>About Me</li>
            <li className="cursor-pointer hover:text-amber-300" onClick={EventHandler}>Home</li>
            <li className="cursor-pointer hover:text-amber-300" onClick={EventHandler}>Skills</li>
            <li className="cursor-pointer hover:text-amber-300" onClick={EventHandler}>Projects</li>
            <li className="cursor-pointer hover:text-amber-300" onClick={EventHandler}>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
