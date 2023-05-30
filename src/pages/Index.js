import React from 'react';
import {Helmet} from 'react-helmet';

const Index = () => {
  return ( 
    <div>

        <Helmet>
            <title>Home</title>
        </Helmet>
    
        <div style={{margin: "auto", width: "fit-content"}}>
            Hi, I am Sashank.
        </div>

    </div>
  );
}

export default Index;