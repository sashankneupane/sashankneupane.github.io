import React from "react";
import { Helmet } from "react-helmet";
import CVComponent from "../components/CVComponent";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
        <CVComponent />
      </div>
    </>
  );
};

export default Projects;
