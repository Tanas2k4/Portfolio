import { BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t border-gray-600 bg-neutral-950/70 backdrop-blur-md text-white mt-20 w-screen">
  <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright Section */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm">
              © 2025 Trần Trọng Tấn. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Designed & Built with passion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 items-center">
            <a
              href="https://www.facebook.com/tran.tan.677008/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 opacity-70 hover:text-blue-500 hover:opacity-100 transition-all duration-300"
            >
              <BsFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/t%E1%BA%A5n-tr%E1%BA%A7n-78b8b5379/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 opacity-70 hover:text-blue-400 hover:opacity-100 transition-all duration-300"
            >
              <BsLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;