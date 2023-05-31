import React, { useContext } from 'react';
import NumberRecognition from './NumberRecognition';
import { DarkModeContext } from '../contexts/DarkModeContext';

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

const MNISTComponent = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`mnist-wrapper ${darkMode ? 'dark-mode' : ''}`} style={{ textAlign: 'center' }}>
      <h4>
        Will update with a better model soon.
      </h4>

      <NumberRecognition
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      >
        {(predictedNumber, predictions) => (
          <>
            <h4>Predicted number:</h4>
            <h2>{predictedNumber}</h2>
          </>
        )}
      </NumberRecognition>
    </div>
  );
};

export default MNISTComponent;
