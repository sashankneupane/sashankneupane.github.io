import React from 'react';
import {Helmet} from 'react-helmet';
import CVComponent from '../components/CVComponent';

const CV = () => {
  return (
    <div>
      <Helmet>
        <title>CV</title>
      </Helmet>
      <CVComponent />
    </div>
  );
}

export default CV;