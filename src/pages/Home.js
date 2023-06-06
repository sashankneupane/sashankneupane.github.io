import React from 'react';
import {Helmet} from 'react-helmet';


import CVComponent from '../components/CVComponent';

const Home = () => {
  return ( 
    <div>

        <Helmet>
            <title>Home</title>
        </Helmet>

        <CVComponent />
  

    </div>
  );
}

export default Home;