import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { useApp } from "../context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { language, theme, toggleLanguage, toggleTheme, t } = useApp();

  const menuOpen = () => {
    setIsOpen(!isOpen);
    setIsSettingsOpen(false);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <nav className={`fixed top-0 z-10 flex w-full items-center justify-between border-b p-6 backdrop-blur-md md:justify-evenly ${
      theme === 'light'
        ? 'border-gray-300 bg-white/70 text-gray-800'
        : 'border-gray-600 bg-neutral-950/70 text-white'
    }`}>
      <a
        href="/home"
        className={`bg-gradient-to-l bg-clip-text text-transparent opacity-80 hover:opacity-100 transition-opacity duration-300 text-3xl font-semibold ${
          theme === 'light'
            ? 'from-gray-800 to-gray-600'
            : 'from-white to-gray-300'
        }`}
      >
        TanAs2k4
      </a>
      
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="nav-link">
          <li className={`opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            {t.home}
          </li>
        </a>
        <a href="#tech" className="nav-link">
          <li className={`opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            {t.tech}
          </li>
        </a>
        <a href="#projects" className="nav-link">
          <li className={`opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            {t.projects}
          </li>
        </a>
        <a href="#contact" className="nav-link">
          <li className={`opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            {t.contact}
          </li>
        </a>
      </ul>

      {/* Settings Icon - Desktop */}
      <div className="hidden md:block relative">
        <button
          onClick={toggleSettings}
          className={`opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          <BsGear size={30} className={`transition-transform duration-300 ${isSettingsOpen ? 'rotate-90' : ''}`} />
        </button>

        {/* Settings Dropdown */}
        {isSettingsOpen && (
          <div className={`absolute right-0 top-12 w-64 border rounded-lg p-4 shadow-xl backdrop-blur-md ${
            theme === 'light'
              ? 'bg-white/95 border-gray-300'
              : 'bg-neutral-900/95 border-gray-700'
          }`}>
            {/* Language Toggle */}
            <div className={`mb-4 pb-4 border-b ${
              theme === 'light' ? 'border-gray-300' : 'border-gray-700'
            }`}>
              <label className="flex items-center justify-between cursor-pointer">
                <span className={`text-sm ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  {language === "en" ? "English" : "Tiếng Việt"}
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
                      language === "vi" ? "bg-blue-600" : theme === 'light' ? 'bg-gray-300' : "bg-gray-600"
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
              <p className={`text-xs mt-2 ${
                theme === 'light' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                {language === "en" ? t.switchToVietnamese : t.switchToEnglish}
              </p>
            </div>

            {/* Theme Toggle */}
            <div>
              <label className="flex items-center justify-between cursor-pointer">
                <span className={`text-sm ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  {theme === "dark" ? t.darkMode : t.lightMode}
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
              <p className={`text-xs mt-2 ${
                theme === 'light' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                {theme === "dark" ? t.switchToLight : t.switchToDark}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {isOpen ? (
          <BiX
            className={`text-4xl cursor-pointer ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}
            onClick={menuOpen}
          />
        ) : (
          <BiMenu
            className={`text-4xl cursor-pointer ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}
            onClick={menuOpen}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`fixed right-0 top-24 h-screen w-1/2 flex flex-col items-start justify-start gap-10 border backdrop-blur-md p-12 md:hidden ${
          theme === 'light'
            ? 'border-gray-300 bg-white/90'
            : 'border-gray-800 bg-neutral-950/90'
        }`}>
          <ul className="flex flex-col gap-8">
            <a href="#home" className="mobile-nav-link" onClick={menuOpen}>
              <li className={`opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                {t.home}
              </li>
            </a>
            <a href="#tech" className="mobile-nav-link" onClick={menuOpen}>
              <li className={`opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                {t.tech}
              </li>
            </a>
            <a href="#projects" className="mobile-nav-link" onClick={menuOpen}>
              <li className={`opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                {t.projects}
              </li>
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={menuOpen}>
              <li className={`opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                {t.contact}
              </li>
            </a>
          </ul>

          {/* Mobile Settings */}
          <div className={`w-full border-t pt-6 ${
            theme === 'light' ? 'border-gray-300' : 'border-gray-700'
          }`}>
            <h3 className={`text-xs uppercase mb-4 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>Settings</h3>
            
            {/* Language Toggle */}
            <div className="mb-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className={`text-sm ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
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
                      language === "vi" ? "bg-blue-600" : theme === 'light' ? 'bg-gray-300' : "bg-gray-600"
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
                <span className={`text-sm ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  {theme === "dark" ? t.lightMode : t.darkMode}
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