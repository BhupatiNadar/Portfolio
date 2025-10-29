import React from "react";

const Header = ({ onAboutClick, onProjectsClick, onContactClick }) => {
  return (
    <header className="w-full h-24 bg-black flex justify-between items-center px-16">
      <div className="text-amber-50 font-bold text-5xl">Portfolio</div>
      <nav className="pr-20">
        <ul className="flex gap-12 text-amber-50 text-lg">
          <li
            className="cursor-pointer hover:text-amber-300"
            onClick={onAboutClick}
          >
            About Me
          </li>
          <li className="cursor-pointer hover:text-amber-300">Home</li>
          <li
            className="cursor-pointer hover:text-amber-300"
            onClick={onProjectsClick}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-amber-300"
            onClick={onContactClick}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
