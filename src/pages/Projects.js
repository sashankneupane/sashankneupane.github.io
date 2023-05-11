import React from 'react';
import CVComponent from '../components/CVComponent';

import TagManager from 'react-gtm-module';

TagManager.dataLayer({
    dataLayer: {
      event: 'pageview',
      pagePath: '/projects',
      pageTitle: 'projects',
    },
  });

const Projects = () => {
    return (
        <div>
            <CVComponent />
        </div>
    );
}

export default Projects;