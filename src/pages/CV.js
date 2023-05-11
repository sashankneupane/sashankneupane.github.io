import React from 'react';
import CVComponent from '../components/CVComponent';

import TagManager from 'react-gtm-module';

TagManager.dataLayer({
    dataLayer: {
      event: 'pageview',
      pagePath: '/cv',
      pageTitle: 'CV',
    },
  });

const CV = () => {
  return (
    <div>
        <CVComponent />
    </div>
  );
}

export default CV;