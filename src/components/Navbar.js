import React, { useState, useEffect } from "react";
import { FaGithub} from "react-icons/fa";
import {BsSun} from 'react-icons/bs';
import {MdDarkMode} from 'react-icons/md';
import "./styles/navbar.css";
import config from "../config";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    useEffect(() => {
      const navbarwrapper = document.querySelector(".navbar-wrapper");
      const socialIcons = document.querySelectorAll(".social-icons a");
  
      if (darkMode) {
        navbarwrapper.classList.add("dark-mode");
      } else {
        navbarwrapper.classList.remove("dark-mode");
      }
    }, [darkMode]);

  return (
    <div className = 'navbar-wrapper'>
        <nav className={darkMode ? "navbar dark" : "navbar"}>
        <div className="logo">Sashank Neupane</div>
        <ul className="nav-links">
            <li>
                <div className="nav-tab">
                    <a href="/">Home</a>
                </div>
            </li>

            <li>
                <div className="nav-tab">
                    <a href="/projects">Projects</a>
                </div>
            </li>
            
            <li>
                <div className="nav-tab">
                    <a href="/blog">Blog</a>
                </div>
            </li>
        </ul>
        <div className="social-icons">
            <a href={config.github}>
                <FaGithub />
            </a>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? <BsSun /> : <MdDarkMode />}
            </button>
        </div>

        </nav>
    </div>
  );
};

export default Navbar;
