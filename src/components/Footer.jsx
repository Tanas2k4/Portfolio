import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { useApp } from "../context/AppContext";

const Footer = () => {
  const { t } = useApp();

  return (
    <footer className="border-t border-gray-600 bg-black backdrop-blur-md text-white mt-20 w-screen ">
        <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright Section */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm">
              © 2025 - {t.copyright}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {t.designed}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 items-center">
            <a
              href="https://www.facebook.com/tran.tan.677008/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 opacity-70 hover:text-white hover:opacity-100 transition-all duration-300"
            >
              <BsFacebook size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/t%E1%BA%A5n-tr%E1%BA%A7n-78b8b5379/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 opacity-70 hover:text-white hover:opacity-100 transition-all duration-300"
            >
              <BsLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;