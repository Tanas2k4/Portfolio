import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { useApp } from "../context/AppContext";

const Intro = () => {
  const { theme, language, t } = useApp();

  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12"
      style={{ fontFamily: language === 'vi' ? 'Inter, sans-serif' : 'inherit' }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 max-w-[900px] w-full">
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col w-full"
        >
          <h1 className={`text-center sm:text-left pl-4 md:pl-6 text-3xl sm:text-4xl lg:text-5xl font-heading font-normal leading-[1.1] ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>
            {t.helloIm}
          </h1>
          <h2 className={`text-center text-6xl sm:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.1] mt-1 ${
            theme === 'light' 
              ? 'bg-gradient-to-l from-gray-800 to-gray-600 bg-clip-text text-transparent'
              : 'bg-gradient-to-l from-white to-gray-400 bg-clip-text text-transparent'
          }`}>
            {t.myname}
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <p className={`text-base sm:text-xl lg:text-2xl font-body font-light mt-0 ${
            theme === 'light' ? 'text-gray-700' : 'text-white'
          }`}>
            {t.location}
          </p>

          <br />
          <p className={`text-base sm:text-lg font-body font-normal max-w-md sm:max-w-lg mx-auto mt-6 text-center leading-7 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            {t.introDescription}
          </p>

          <a
            href="https://github.com/TanAs2k4"
            target="_blank"
            rel="noopener noreferrer"
            className={`h-10 px-4 py-2 flex items-center gap-2 rounded-lg transition-colors duration-300 mt-8 ${
              theme === 'light'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-white text-black hover:bg-gray-300'
            }`}
          >
            <BsGithub size={20} />
            {t.goToGithub}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;