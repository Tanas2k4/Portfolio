import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGear } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // "en" or "vi"
  const [theme, setTheme] = useState("dark"); // "dark" or "light"

  const menuOpen = () => {
    setIsOpen(!isOpen);
    setIsSettingsOpen(false);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-gray-600 bg-neutral-950/70 p-6 backdrop-blur-md text-white md:justify-evenly">
      <a
        href="/home"
        className="bg-gradient-to-l from-white to-gray-300 bg-clip-text text-transparent opacity-80 hover:opacity-100 transition-opacity duration-300 text-3xl font-semibold"
      >
        TanAs2k4
      </a>
      
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="nav-link">
          <li className="text-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            Home
          </li>
        </a>
        <a href="#tech" className="nav-link">
          <li className="text-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            Tech
          </li>
        </a>
        <a href="#projects" className="nav-link">
          <li className="text-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            Projects
          </li>
        </a>
        <a href="#contact" className="nav-link">
          <li className="text-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            Contact
          </li>
        </a>
      </ul>

      {/* Settings Icon - Desktop */}
      <div className="hidden md:block relative">
        <button
          onClick={toggleSettings}
          className="text-gray-300 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
        >
          <BsGear size={30} className={`transition-transform duration-300 ${isSettingsOpen ? 'rotate-90' : ''}`} />
        </button>

        {/* Settings Dropdown */}
        {isSettingsOpen && (
          <div className="absolute right-0 top-12 w-64 bg-neutral-900/95 border border-gray-700 rounded-lg p-4 shadow-xl backdrop-blur-md">
            {/* Language Toggle */}
            <div className="mb-4 pb-4 border-b border-gray-700">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-300 text-sm">
                  {language === "en" ? "Tiếng Việt" : "English"}
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={language === "vi"}
                    onChange={toggleLanguage}
                  />
                  <div
                    className={`w-14 h-7 rounded-full transition-colors duration-300 ${
                      language === "vi" ? "bg-blue-600" : "bg-gray-600"
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                        language === "vi" ? "translate-x-7" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </label>
              <p className="text-xs text-gray-500 mt-2">
                {language === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}
              </p>
            </div>

            {/* Theme Toggle */}
            <div>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-300 text-sm">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={theme === "light"}
                    onChange={toggleTheme}
                  />
                  <div
                    className={`w-14 h-7 rounded-full transition-colors duration-300 ${
                      theme === "light" ? "bg-yellow-500" : "bg-gray-600"
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                        theme === "light" ? "translate-x-7" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </label>
              <p className="text-xs text-gray-500 mt-2">
                {theme === "dark" ? "Switch to light theme" : "Chuyển sang chế độ tối"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {isOpen ? (
          <BiX
            className="text-4xl text-white cursor-pointer"
            onClick={menuOpen}
          />
        ) : (
          <BiMenu
            className="text-4xl text-white cursor-pointer"
            onClick={menuOpen}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-24 h-screen w-1/2 flex flex-col items-start justify-start gap-10 border border-gray-800 bg-neutral-950/90 p-12 md:hidden">
          <ul className="flex flex-col gap-8">
            <a href="#home" className="mobile-nav-link" onClick={menuOpen}>
              <li className="text-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Home
              </li>
            </a>
            <a href="#tech" className="mobile-nav-link" onClick={menuOpen}>
              <li className="text-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Tech
              </li>
            </a>
            <a href="#projects" className="mobile-nav-link" onClick={menuOpen}>
              <li className="text-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Projects
              </li>
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={menuOpen}>
              <li className="text-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Contact
              </li>
            </a>
          </ul>

          {/* Mobile Settings */}
          <div className="w-full border-t border-gray-700 pt-6">
            <h3 className="text-gray-400 text-xs uppercase mb-4">Settings</h3>
            
            {/* Language Toggle */}
            <div className="mb-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-300 text-sm">
                  {language === "en" ? "Tiếng Việt" : "English"}
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={language === "vi"}
                    onChange={toggleLanguage}
                  />
                  <div
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      language === "vi" ? "bg-blue-600" : "bg-gray-600"
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                        language === "vi" ? "translate-x-6" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </label>
            </div>

            {/* Theme Toggle */}
            <div>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-300 text-sm">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={theme === "light"}
                    onChange={toggleTheme}
                  />
                  <div
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      theme === "light" ? "bg-yellow-500" : "bg-gray-600"
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                        theme === "light" ? "translate-x-6" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;