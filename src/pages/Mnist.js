import React from 'react';
import MNISTComponent from '../components/MNISTComponent';

import '../styles/mnist.css';
import { DarkModeContext } from '../contexts/DarkModeContext';

const MNIST = () => {
  const { darkMode } = React.useContext(DarkModeContext);
  return (
    <div className={`mnist-page ${darkMode? 'dark-mode': ''}`}>

      <div className="mnist-content">
        <MNISTComponent />
      </div>
    </div>
  );
};

export default MNIST;
