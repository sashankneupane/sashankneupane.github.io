import React from 'react';
import { Helmet } from 'react-helmet';

import NotFoundComponent from '../components/NotFoundComponent';

const NotFound = () => {
    return (

        <div>
            <Helmet><title>404</title></Helmet>
            <NotFoundComponent />
        </div>
    );
}

export default NotFound;