import React, { useContext } from "react";
import "../styles/blog.css";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Blog = () => {
    const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`blog-container ${darkMode ? "dark-mode" : ""}`}>
    <div className={`coming-soon-container`}>
      <h1>Coming Soon</h1>
      <p>Stay tuned for exciting updates!</p>
    </div>
    </div>
  );
};

export default Blog;
