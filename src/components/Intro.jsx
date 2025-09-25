import { motion } from "framer-motion";
import "./Intro.css";

const Intro = () => {
  return (
    <div id="home" className="intro-container">
      <div className="intro-content">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/public/image.png" alt="Profile avatar" className="intro-image" />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="intro-text"
        >
          <h1 className="intro-title">Tran Tan</h1>
          <h3 className="intro-subtitle">Web Developer</h3>
          <p className="intro-description">
            I'm a web developer skilled in ASP.NET Core and Entity Framework.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;