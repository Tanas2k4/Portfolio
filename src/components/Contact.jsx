import React from "react";

const Contact = () => {
  return <div id="contact" className="flex-min-h-[70px] min-w-full items-center justify-center">
    <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
      <h1 className="text-center text-5xl md:text-7xl">
        <span className="bg-gradient-to-r from-white font-light to-gray-600 bg-clip-text text-transparent">
          Get in touch
        </span>
      </h1>

      <p className="text-gray-300 text-lg leading-8 md:text-xl">
        Want to chat? sent me an E-mail through this button and i'll  respond
        Whenever I can 
      </p>

      <a href="mailto:t.ttan25204@gmail.com" className="text-nowrap rounded-lg  border border-white bg-black px-5 
      py-3 text-lg font-bold text-white  transition-all duration-200
      hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-600">
        Contact Me
      </a>
    </div>
  </div>
};

export default Contact;
