import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-gray-600 bg-black/70 p-6 backdrop-blur-md text-white md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent opacity-80 hover:opacity-100 transition-opacity duration-300 text-3xl font-semibold"
      >
        TanAs2k4
      </a>
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="nav-link">
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            Home
          </li>
        </a>
        <a href="#tech" className="nav-link">
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            Tech
          </li>
        </a>
        <a href="#projects" className="nav-link">
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            Projects
          </li>
        </a>
        <a href="#contact" className="nav-link">
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            Contact
          </li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="social-link">
          <BsFacebook size={20} className="opacity-70 hover:text-red-500 hover:opacity-100 transition-all duration-300 cursor-pointer" />
        </li>
        <li className="social-link">
          <BsLinkedin size={20} className="opacity-70 hover:text-red-500 hover:opacity-100 transition-all duration-300 cursor-pointer" />
        </li>
        <li className="social-link">
          <BsInstagram size={20} className="opacity-70 hover:text-red-500 hover:opacity-100 transition-all duration-300 cursor-pointer" />
        </li>
        <li className="social-link">
          <BsGithub size={20} className="opacity-70 hover:text-red-500 hover:opacity-100 transition-all duration-300 cursor-pointer" />
        </li>
      </ul>

      <div className="md:hidden">
        {isOpen ? (
          <BiX
            className="text-4xl cursor-pointer"
            onClick={menuOpen}
          />
        ) : (
          <BiMenu
            className="text-4xl cursor-pointer"
            onClick={menuOpen}
          />
        )}
      </div>

      {isOpen && (
        <div className="fixed right-0 top-24 h-screen w-1/2 flex flex-col items-start justify-start gap-10 border border-gray-800 bg-black/90 p-12 md:hidden">
          <ul className="flex flex-col gap-8">
            <a href="#home" className="mobile-nav-link" onClick={menuOpen}>
              <li className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Home
              </li>
            </a>
            <a href="#tech" className="mobile-nav-link" onClick={menuOpen}>
              <li className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Tech
              </li>
            </a>
            <a href="#projects" className="mobile-nav-link" onClick={menuOpen}>
              <li className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Projects
              </li>
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={menuOpen}>
              <li className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Contact
              </li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="mobile-social-link">
              <BsFacebook size={20} className="opacity-70 hover:text-red-500 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            </li>
            <li className="mobile-social-link">
              <BsLinkedin size={20} className="opacity-70 hover:text-red-500 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            </li>
            <li className="mobile-social-link">
              <BsInstagram size={20} className="opacity-70 hover:text-red-500 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            </li>
            <li className="mobile-social-link">
              <BsGithub size={20} className="opacity-70 hover:text-red-500 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;