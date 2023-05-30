import React from 'react';
import { Helmet } from 'react-helmet';
import MNISTComponent from '../components/MNISTComponent';

const Mnist = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Helmet>
        <title>MNIST Digit Classifier</title>
      </Helmet>
      <MNISTComponent />
    </div>
  );
};

export default Mnist;
