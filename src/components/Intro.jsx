import { motion } from "framer-motion";
import { BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";
import cvFile from "../../public/cv/TranTrongTan-Backend-Intern-CV.pdf";
import { useApp } from "../context/AppContext";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

import avatarIntro from "../assets/avatar.JPEG";
import { BiLogoGmail } from "react-icons/bi";
const Intro = () => {
  const { theme, language, t } = useApp();

  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12"
      style={{
        fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit",
      }}
    >
      <div className="container mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="
              flex flex-col items-center text-center
              gap-6
              order-2 lg:order-1
            "
          >
            {/* Header */}
            <div className="flex flex-col items-center">
              <h1
                className={`text-2xl sm:text-3xl font-heading font-normal leading-tight ${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {t.helloIm}
              </h1>

              <h2
                className={`text-5xl sm:text-5xl lg:text-xl xl:text-7xl font-heading font-extrabold mt-1 leading-tight `}
              >
                <span
                  className={`
                    inline-block
                    pt-3
                    ${
                      theme === "light"
                        ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
                        : "bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                    }`}
                >
                  {t.myname}
                </span>
              </h2>


            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              
              {/* Hire Me */}
              <motion.a
                href="https://zalo.me/0363337511"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full 
                  font-medium transition-all duration-300 shadow-lg
                  ${
                    theme === "light"
                      ? "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl"
                      : "bg-gray-100 text-black hover:bg-gray-200 hover:shadow-2xl"
                  }`}
              >      
                <HiChatBubbleLeftRight size={20} />       
                {t.connect}                
              </motion.a>

              {/* Download CV
              <motion.a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border-2
                  font-medium transition-all duration-300 border shadow-md
                  ${
                    theme === "light"
                      ? "border-gray-300 text-gray-900 hover:bg-gray-100 hover:shadow-lg border-gray-900"
                      : "border-gray-600 text-white hover:bg-gray-800 hover:shadow-xl border-white"
                  }`}
              >
                <BsDownload size={20} />
                {t.downloadCV}
              </motion.a> */}
            </div>

            <div
              className="flex flex-wrap justify-center gap-6 mt-6"
            >
              {/* Github Link */}
             <motion.a
                href="https://github.com/Tanas2k4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  inline-flex items-center justify-center
                  transition-all duration-300
                  ${
                    theme === "light"
                      ? "text-gray-800 hover:text-black"
                      : "text-gray-200 hover:text-white"
                  }
                `}
              >
                <BsGithub size={36} />
              </motion.a>

              {/* LinkedIn Profile */}
              <motion.a
                href="https://www.linkedin.com/in/t%E1%BA%A5n-tr%E1%BA%A7n-78b8b5379/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  inline-flex items-center justify-center
                  transition-all duration-300
                  ${
                    theme === "light"
                      ? "text-gray-800 hover:text-black"
                      : "text-gray-200 hover:text-white"
                  }
                `}
              >
                <BsLinkedin size={36} />
              </motion.a>

              {/* Mailto */}
              <motion.a
                href="mailto:tt.tan25204@gmail.com"
                alt="tt.tan25204@gmial.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  inline-flex items-center justify-center
                  transition-all duration-300
                  ${
                    theme === "light"
                      ? "text-gray-800 hover:text-black"
                      : "text-gray-200 hover:text-white"
                  }
                `}
              >
                <BiLogoGmail  size={40} />
              </motion.a>
            </div>
          </motion.div>
          

          {/* Right Column - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative Background Elements */}
              <div
                className={`absolute inset-0 rounded-full blur-3xl opacity-20 ${
                  theme === "light"
                    ? "bg-gradient-to-br from-white to-gray-700"
                    : "bg-gradient-to-br from-white to-gray-500"
                }`}
                style={{ transform: "scale(1.1)" }}
              />

              {/* Image Container */}
              <div className="relative">
                <div
                  className={`relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden shadow-2xl ${
                    theme === "light"
                      ? "ring-4 ring-gray-200"
                      : "ring-4 ring-gray-700"
                  }`}
                >
                  <img
                    src={avatarIntro}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 pointer-events-none ${
                      theme === "light"
                        ? "bg-gradient-to-t from-white/10 to-transparent"
                        : "bg-gradient-to-t from-black/20 to-transparent"
                    }`}
                  />
                </div>

                {/* Decorative Corner Elements */}
                <div
                  className={`absolute -top-4 -left-4 w-24 h-24 rounded-full blur-2xl opacity-30 ${
                    theme === "light" ? "bg-gray-200" : "bg-gray-500"
                  }`}
                />
                <div
                  className={`absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-2xl opacity-30 ${
                    theme === "light" ? "bg-gray-300" : "bg-gray-400"
                  }`}
                />
              </div>
  
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
