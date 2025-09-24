import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const menuOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <a href="#home" className="logo">TanAs2k4</a>
            <ul className="nav-links">
                <a href="#home" className="nav-link"><li>Home</li></a>
                <a href="#tech" className="nav-link"><li>Tech</li></a>
                <a href="#project" className="nav-link"><li>Projects</li></a>
                <a href="#contact" className="nav-link"><li>Contact</li></a>
            </ul>

            <ul className="social-links">
                <li className="social-link"><BsFacebook/></li>
                <li className="social-link"><BsLinkedin/></li>
                <li className="social-link"><BsInstagram/></li>
                <li className="social-link"><BsGithub/></li>
            </ul>

            {isOpen ? (
                <BiX className="menu-icon" onClick={menuOpen}/>
            ) : (
                <BiMenu className="menu-icon" onClick={menuOpen}/>
            )}

            {isOpen && (
                <div className="mobile-menu">
                    <ul className="mobile-nav-links">
                        <a href="#home" className="mobile-nav-link"><li>Home</li></a>
                        <a href="#tech" className="mobile-nav-link"><li>Tech</li></a>
                        <a href="#project" className="mobile-nav-link"><li>Projects</li></a>
                        <a href="#contact" className="mobile-nav-link"><li>Contact</li></a>
                    </ul>

                    <ul className="mobile-social-links">
                        <li className="mobile-social-link"><BsFacebook/></li>
                        <li className="mobile-social-link"><BsLinkedin/></li>
                        <li className="mobile-social-link"><BsInstagram/></li>
                        <li className="mobile-social-link"><BsGithub/></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;