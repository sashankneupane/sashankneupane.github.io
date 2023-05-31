import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import './styles/footer.css';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  const footerClass = darkMode ? 'footer dark-mode' : 'footer';

  return (
    <footer className={footerClass}>
      <div className="footer-content">
        <div className="footer-copyright">
        Sashank Neupane &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
