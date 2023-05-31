import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import NotFoundComponent from '../components/NotFoundComponent';
import Footer from '../components/Footer';

const NotFound = () => {
    return (

        <div>
            <Helmet><title>404</title></Helmet>
            <Navbar />
            <NotFoundComponent />
            <Footer />
        </div>
    );
}

export default NotFound;