import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-gray-600 bg-neutral-950/70 p-6 backdrop-blur-md text-white md:justify-evenly">
      <a
        href="#home"
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

      <ul className="hidden md:flex gap-5">
        <li className="social-link" >
          <a href="https://www.facebook.com/tran.tan.677008/" target="_blank" rel="noopener noreferrer">
            <BsFacebook size={30} className="text-gray-300 opacity-70 hover:text-gray-200 hover:opacity-100 transition-all duration-300 cursor-pointer" />
          </a>
        </li>
        <li className="social-link">
          <a href="https://www.linkedin.com/in/t%E1%BA%A5n-tr%E1%BA%A7n-78b8b5379/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={30} className="text-gray-300 opacity-70 hover:text-gray-200 hover:opacity-100 transition-all duration-300 cursor-pointer" />
          </a>
        </li>
        
      </ul>

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

          <ul className="flex flex-wrap gap-5">
            <li className="mobile-social-link">
              <a href="https://www.facebook.com/tran.tan.677008/">
                <BsFacebook size={30} className="text-gray-300 opacity-70 hover:text-gray-200 hover:opacity-100 transition-all duration-300 cursor-pointer" />
              </a>
            </li>
            <li className="mobile-social-link">
              <a href="https://www.linkedin.com/in/t%E1%BA%A5n-tr%E1%BA%A7n-78b8b5379/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin size={30} className="text-gray-300 opacity-70 hover:text-gray-200 hover:opacity-100 transition-all duration-300 cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;