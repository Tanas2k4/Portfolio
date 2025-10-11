import React from "react";
import { useApp } from "../context/AppContext";

const Contact = () => {
  const { theme } = useApp();

  return (
    <div id="contact" className="flex-min-h-[70px] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className={`font-light bg-clip-text text-transparent ${
            theme === 'light'
              ? 'bg-gradient-to-r from-gray-800 to-gray-600'
              : 'bg-gradient-to-r from-white to-gray-400'
          }`}>
            Get in touch
          </span>
        </h1>

        <p className={`text-lg leading-8 md:text-xl ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          If you want to contact, send me an E-mail through this button and i'll respond
          Whenever I can 
        </p>

        <a 
          href="mailto:tt.tan25204@gmail.com" 
          className={`text-nowrap rounded-lg border px-5 py-3 text-lg font-bold transition-all duration-200 hover:-translate-y-2 hover:shadow-xl ${
            theme === 'light'
              ? 'border-gray-800 bg-white text-gray-800 hover:shadow-gray-400'
              : 'border-white bg-black text-white hover:shadow-gray-600'
          }`}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;