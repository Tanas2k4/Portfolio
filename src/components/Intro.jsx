import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div id="home" className="flex min-h-screen w-full items-center justify-center p-8 md:p-12 lg:p-16">
      <div className="flex flex-col items-center justify-center gap-8 max-w-[800px] w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/public/image.png"
            alt="Profile avatar"
            className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] object-cover cursor-pointer rounded-full shadow-[0_8px_12px_-2px_rgba(99,102,241,0.4)] transition-all duration-300 ease-in-out hover:translate-y-[-8px] hover:scale-105 hover:shadow-[0_12px_20px_-4px_rgba(79,70,229,0.5)]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 max-w-[600px] w-full"
        >
          <h1 className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent text-4xl font-light leading-[1.2] md:text-5xl lg:text-6xl">
            Tran Tan
          </h1>
          <h3 className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent text-3xl font-light leading-[1.3] md:text-4xl">
            Web Developer
          </h3>
          <p className="text-sm text-gray-400 text-pretty md:text-base">
            I'm a web developer skilled in ASP.NET Core and Entity Framework.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;