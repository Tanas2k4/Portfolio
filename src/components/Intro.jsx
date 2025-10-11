import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const Intro = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center p-6 md:p-8 lg:p-12"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 max-w-[800px] w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src="/public/image.png"
            alt="Profile avatar"
            className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] object-cover cursor-pointer rounded-full shadow-[0_8px_12px_-2px_rgba(120,119,198,0.4)] transition-all duration-300 ease-in-out hover:translate-y-[-8px] hover:scale-105 hover:shadow-[0_12px_20px_-4px_rgba(120,119,198,0.5)]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-8 max-w-[700px] w-full text-center"
        >
          <h1 className="text-white text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Tran Trong Tan
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-4">
            Born 2004, Ben Tre, Vietnam | Studying at HUTECH University (2022 - Present)
          </p>
          <p className="text-gray-300 text-base leading-7 md:text-lg">
            I'm a final-year Software Engineering student focused on .NET/.NET Core and eager to explore new technologies.
          </p>
          <a
            href="https://github.com/Tanas2k4" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-white hover:bg-gray-200 h-10 px-4 py-2 flex items-center gap-2 rounded-lg transition-colors duration-300"
          >
            <BsGithub size={20} />
            Go to GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;