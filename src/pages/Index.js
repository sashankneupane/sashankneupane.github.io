import React from 'react';
import {Helmet} from 'react-helmet';

import Navbar from '../components/Navbar';
import CVComponent from '../components/CVComponent';
import Footer from '../components/Footer';

const Index = () => {
  return ( 
    <div>

        <Helmet>
            <title>Home</title>
        </Helmet>
    
        <Navbar />
        <CVComponent />
        <Footer />

    </div>
  );
}

export default Index;