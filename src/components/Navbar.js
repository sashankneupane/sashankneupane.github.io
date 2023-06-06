import React, { useContext, useEffect } from "react";
import { FaGithub} from "react-icons/fa";
import {BsSun} from 'react-icons/bs';
import {MdDarkMode} from 'react-icons/md';
import "./styles/navbar.css";
import config from "../config";

import { DarkModeContext } from "../contexts/DarkModeContext";

const Navbar = () => {
    
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const navbarClass = darkMode ? "navbar dark-mode" : "navbar";
  
    const handleDarkModeToggle = () => {
      toggleDarkMode();
    };
  
    useEffect(() => {
      const navbarwrapper = document.querySelector(".navbar-wrapper");
  
      if (darkMode) {
        navbarwrapper.classList.add("dark-mode");
      } else {
        navbarwrapper.classList.remove("dark-mode");
      }
    }, [darkMode]);

  return (
    <div className = 'navbar-wrapper'>
        <nav className={navbarClass}>
        <div className="logo"><a href="/">Sashank Neupane</a></div>
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
            <button className="dark-mode-toggle"> 
                {darkMode ? <BsSun /> : <MdDarkMode />}
            </button>
        </div>

        </nav>
    </div>
  );
};

export default Navbar;
