import React from 'react';
import '../styles/style.css';


const CVComponent = () => {
    return (
      <div className="cv-container">
        <h1 className="cv-header">Sashank Neupane</h1>
        <div className="cv-contact">
          <a href="mailto:sashank.neupane@nyu.edu" className="cv-link">sashank.neupane@nyu.edu</a>
          <span className="cv-separator nomobile"> | </span>
          <a href="sashankneupane.com" className="cv-link">sashankneupane.com</a>
          <span className="cv-separator nomobile"> | </span>
          <a href="https://www.github.com/sashankneupane" className='cv-link'> sashankneupane </a>
        </div>
        <hr className="cv-rule" />
        <section className="cv-section">
          <h2 className="cv-section-header">Education</h2>
          <ul className="cv-list">
            <li className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">New York University Abu Dhabi</span>
                <span className="cv-item-date present">Aug 2021 - Present</span>
              </div>
              <div className="cv-item-subheader">Major in Computer Science and Mathematics</div>
              <div className="cv-item-description">
                Data Structures, Algorithms, Computer Systems Organization, Multivariable Calculus, Linear Algebra, Ordinary Differential Equations, Probability and Statistics, Fundamentals of Machine Learning, Artificial Intelligence, Computer Networking, Data Management and Analysis
              </div>
            </li>
          </ul>
        </section>
        <hr className="cv-rule" />
        <section className="cv-section">
          <h2 className="cv-section-header">Experience</h2>
          <ul className="cv-list">
            <li className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">Research Assistant</span>
                <span className="cv-item-date present">May 2023 - Present</span>
              </div>
              <div className="cv-item-subheader">Summer Research Assistantship Program</div>
              <div className="cv-item-description">
                <ul>
                  <li> Implementing state-of-the-art Backdoor Attacks and Defenses. Analyzing the pros and cons of existing defense mechanisms as well as their robustness in full-system setting, and devising a more powerful defense considering the ADAS stack.</li>
                  <li> Testing and validation for different use-cases of autonomous vehicles, and different drive situations.</li>
                </ul>
              </div>
            </li>
            <li className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">Teaching Assistant</span>
              <span className="cv-item-date">Aug 2022 - Dec 2022</span>
            </div>
            <div className="cv-item-subheader">Teaching Assistant - Computer Programming for Engineers</div>
            <div className="cv-item-description">
              <ul>
                <li> Supported students in the lab, led discussion sections, and held office hours</li>
                <li> Gained experience in teaching and instructional support.</li> 
              </ul>
            </div>
            </li>
            <li className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">Reference Assistant</span>
                <span className="cv-item-date">Aug 2022 - Jan 2023</span>
              </div>
              <div className="cv-item-subheader">Reference Assistant - NYU Abu Dhabi Library</div>
              <div className="cv-item-description">
                <ul>
                  <li> Provided reference and research assistance to library patrons</li>
                  <li> Contributed to the maintenance and organization of library resources</li>
                </ul>
              </div>
            </li>
          </ul>

        </section>
    </div>
);
}

export default CVComponent;