import React, { Component } from 'react';
import NumberRecognition from './NumberRecognition';
import './styles/style.css';

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;


export default class MNISTComponent extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center'}}>
        <h4>
           Using a trained MNIST Keras model, with Tensorflow.js and React.js
        </h4>

        <NumberRecognition
           width={CANVAS_WIDTH}
           height={CANVAS_HEIGHT}
        >
        {
          (predictedNumber, predictions) => (
            <>
              <h4>Predicted number:</h4>
              <h2>{predictedNumber}</h2>
            </>
          )
        }
        </NumberRecognition>
      </div>
    );
  }
}