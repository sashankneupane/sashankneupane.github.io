import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/projects.css';

import {DarkModeContext} from '../contexts/DarkModeContext';

const ProjectsPage = () => {
  const {darkMode} = React.useContext(DarkModeContext);

  return (
    <div className={`projects-wrapper ${darkMode ? "dark-mode" : ""}`}>
      <Navbar />
      
      <main className="projects-container">
        <div className="project">
          <h2>MNIST Digit Recognizer</h2>
          <p>
            This project is a digit recognition model trained on the MNIST dataset. It uses LeNet model to accurately identify handwritten digits from 0 to 9.
          </p>
          <a href="/projects/mnist" className="project-link">View Project</a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
