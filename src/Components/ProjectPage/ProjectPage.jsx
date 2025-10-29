import React, { useState } from "react";
import Ecommerce from "../../Asset/Ecommerce.png";

const ProjectPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const DemoPopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500); // auto-hide after 2.5s
  };

  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col items-center py-10 relative">
      <h1 className="text-white font-bold text-5xl mb-10">Projects</h1>
      <div className="h-10"></div>

      {/* Project Card */}
      <div className="bg-slate-800 rounded-3xl shadow-2xl p-8 w-96 sm:w-[28rem] text-center transition-transform hover:scale-105">
        <img
          src={Ecommerce}
          alt="Ecommerce Project"
          className="rounded-xl mb-6 w-full h-64 object-cover shadow-lg"
        />
        <h2 className="text-white text-3xl font-semibold mb-3">
          E-commerce Website
        </h2>
        <p className="text-gray-300 text-base mb-6 leading-relaxed">
          Built with React — gained hands-on experience developing modern and
          responsive web applications with seamless UI.
        </p>
        <div className="flex justify-center gap-8 mt-6">
          <a
            href="https://github.com/BhupatiNadar/Ecommerce"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3.5 px-10 rounded-2xl text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
              Code
            </button>
          </a>
          <button
            onClick={DemoPopup}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3.5 px-10 rounded-2xl text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            Demo
          </button>
        </div>
      </div>

      {/* Popup message */}
      {showPopup && (
        <div className="absolute bottom-10 bg-white text-slate-900 px-6 py-3 rounded-xl shadow-xl text-lg font-semibold animate-bounce">
          Demo will be added soon 🚀
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
