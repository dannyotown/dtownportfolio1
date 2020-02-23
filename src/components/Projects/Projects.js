import React, { useState, useEffect } from "react";
import RepoCards from "./Repos";
import fetchGitHub from "../utils/apiInstance";

function Projects() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    let countApiCalls = 0;
    async function getData() {
      try {
        if (window.scrollY > 925 && countApiCalls === 0) {
          countApiCalls += 1;
          const getApiData = await fetchGitHub();
          setRepos(getApiData.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (countApiCalls === 0) {
      document.addEventListener(
        "scroll",
        () => {
          getData();
        },
        true
      );
    } else {
      return document.removeEventListener("scroll", getData(), false);
    }
  }, []);
  return (
    <>
      <div className="Projects" id="ScrollToProjects">
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
