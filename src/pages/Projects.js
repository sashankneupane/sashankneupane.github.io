import React from 'react';
import {Helmet} from 'react-helmet';
import CVComponent from '../components/CVComponent';

const Projects = () => {
    return (
        <>
        <Helmet><title>Projects</title></Helmet>
        <div>
            <CVComponent />
        </div>
        </>
    );
}

export default Projects;