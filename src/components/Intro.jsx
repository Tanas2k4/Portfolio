import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const Intro = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 max-w-[900px] w-full">
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col w-full"
        >
          <h1 className="text-center sm:text-left pl-4 md:pl-6 text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-white leading-[1.1]">
            HELLO, I'M
          </h1>
          <h2 className="text-center text-6xl sm:text-7xl lg:text-8xl font-heading font-extrabold bg-gradient-to-l from-white to-gray-400 bg-clip-text text-transparent leading-[1.1] mt-1">
            TRAN TRONG TAN
          </h2>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* ✅ nhỏ hơn khi màn hình nhỏ, lớn hơn khi sm trở lên */}
          <p className="text-base sm:text-xl lg:text-2xl font-body font-light text-white mt-0">
            2004, Ben Tre, Vietnam | Studying at HUTECH University (2022 - Present)
          </p>

          <br />
          <p className="text-base sm:text-lg font-body font-normal text-gray-300 max-w-md sm:max-w-lg mx-auto mt-6 text-center leading-7">
            I'm a final-year Software Engineering student focused on .NET/.NET Core and eager to explore new technologies.
          </p>

          <a
            href="https://github.com/TanAs2k4"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-gray-300 h-10 px-4 py-2 flex items-center gap-2 rounded-lg transition-colors duration-300 mt-8"
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
