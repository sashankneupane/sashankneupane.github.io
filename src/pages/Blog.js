import React, { useContext } from "react";
import "../styles/blog.css";
import Navbar from "../components/Navbar";
import { DarkModeContext } from "../contexts/DarkModeContext";
import Footer from "../components/Footer";

const Blog = () => {
    const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`blog-container ${darkMode ? "dark-mode" : ""}`}>
    <Navbar />
    <div className={`coming-soon-container`}>
      <h1>Coming Soon</h1>
      <p>Stay tuned for exciting updates!</p>
    </div>
    <Footer />
    </div>
  );
};

export default Blog;
