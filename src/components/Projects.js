import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoCards from "./Repos";

function Projects() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/dannyotown/repos")
      .then(response => setRepos(response.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <div className="Projects">
        <h1>Projects</h1>
        <div className="ProjectsUnderline"></div>
        <div className="ProjectFlexRepo">
          {repos.map((repo, index) => {
            return <RepoCards repo={repo} timer={index} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
