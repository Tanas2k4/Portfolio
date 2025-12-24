import { motion } from "framer-motion";
import { BsDownload, BsGithub } from "react-icons/bs";
import { useApp } from "../context/AppContext";
import avatarIntro from "../assets/avatar.JPEG";
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
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Header */}
            <div className="flex flex-col">
              <h1
                className={`text-2xl sm:text-3xl font-heading font-normal leading-tight ${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {t.helloIm}
              </h1>
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-heading font-extrabold leading-tight mt-2 ${
                  theme === "light"
                    ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                }`}
              >
                {t.myname}
              </h2>
            </div>

            {/* Location */}
            <p
              className={`text-base sm:text-lg font-body font-light flex items-center gap-2 ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              {t.location}
            </p>

            {/* Description */}
            <p
              className={`text-sm sm:text-base font-body font-normal leading-relaxed max-w-xl ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              {t.introDescription}
            </p>

            {/* CTA Button */}
            <div className="flex gap-4">
              {/* GitHub */}
              <motion.a
                href="https://github.com/TanAs2k4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg ${
                  theme === "light"
                    ? "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl"
                    : "bg-white text-gray-900 hover:bg-gray-100 hover:shadow-2xl"
                }`}
              >
                <BsGithub size={20} />
                {t.goToGithub}
              </motion.a>

              {/* Download CV */}
              <motion.a
                href="/cv/TranTrongTan-Backend-Intern CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border shadow-md ${
                  theme === "light"
                    ? "border-gray-300 text-gray-900 hover:bg-gray-100 hover:shadow-lg"
                    : "border-gray-600 text-white hover:bg-gray-800 hover:shadow-xl"
                }`}
              >
                <BsDownload size={20} />
                {t.downloadCV}
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
                    ? "bg-gradient-to-br from-blue-400 to-purple-400"
                    : "bg-gradient-to-br from-blue-500 to-purple-500"
                }`}
                style={{ transform: "scale(1.1)" }}
              />

              {/* Image Container */}
              <div className="relative">
                <div
                  className={`relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden shadow-2xl ${
                    theme === "light"
                      ? "ring-4 ring-gray-200"
                      : "ring-4 ring-gray-00"
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
