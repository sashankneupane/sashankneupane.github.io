import React from 'react';
import MNISTComponent from '../components/MNISTComponent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/mnist.css';
import { DarkModeContext } from '../contexts/DarkModeContext';

const MNIST = () => {
  const { darkMode } = React.useContext(DarkModeContext);
  return (
    <div className={`mnist-page ${darkMode? 'dark-mode': ''}`}>

      <Navbar />
      <div className="mnist-content">
        <MNISTComponent />
      </div>
      <Footer />
    </div>
  );
};

export default MNIST;
