import { BsFacebook, BsLinkedin, BsMailbox } from "react-icons/bs";
import { useApp } from "../context/AppContext";
import { SiZalo } from "react-icons/si";
import { RiMailLine } from "react-icons/ri";

const Footer = () => {
  const { t } = useApp();
  const zaloPhone = String.fromCharCode(
    48,51,54,51,51,51,55,53,49,49
  );
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
            <a href="mailto:tt.tan25204@gmail.com" className="text-sm text-gray-300 mt-1">
              <RiMailLine size={17} className="inline-block mr-2 mb-1" />
              tt.tan25204@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 items-center">
            <a href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-gray-300 opacity-70 hover:text-white hover:opacity-100 transition-all duration-300 "
            >
              <SiZalo size={30} />
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