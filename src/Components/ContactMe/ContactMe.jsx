import React from "react";

const ContactMe = () => {
  return (
    <div className="w-full h-screen bg-slate-800 flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold text-white mb-6">Contact Me</h1>
      <div className="h-10"></div>
      <p className="text-2xl text-gray-300 mb-4 max-w-md">
        Feel free to reach out to me via email or connect with me on LinkedIn.
      </p>
      <div className="h-10"></div>
      <a
        href="mailto:nadarbhupati@gmail.com"
        className="text-white text-4xl font-mono border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-slate-800 transition-colors duration-300"
      >
        nadarbhupati@gmail.com
      </a>
    </div>
  );
};

export default ContactMe;
