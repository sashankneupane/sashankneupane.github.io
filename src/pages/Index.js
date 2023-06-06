import React from 'react';
import {Helmet} from 'react-helmet';


import CVComponent from '../components/CVComponent';

const Index = () => {
  return ( 
    <div>

        <Helmet>
            <title>Home</title>
        </Helmet>

        <CVComponent />
  

    </div>
  );
}

export default Index;