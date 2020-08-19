import React from "react";
import ProjectCard from "./Repos";
import ProjectData from "./Data/ProjectData";

function Projects() {
  return (
    <>
      <div className="Projects" id="ScrollToProjects">
        <h1>Projects</h1>
        <div className="ProjectsUnderline" />
        <div className="ProjectFlexRepo">
          {ProjectData.map((data, index) => {
            return <ProjectCard data={data} key={index} index={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
