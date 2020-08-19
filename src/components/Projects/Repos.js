import React, { useState } from "react";

function ProjectCard({ data, index }) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="ProjectBox">
        {index % 2 === 0 ? (
          <>
            <div className="ProjectLeftBox">
              <h1 className="ProjectCardHeader">{data.Name}</h1>
              <a href="https://www.freehold.dev/">
                <img
                  className="ProjectGif"
                  src={!hover ? data.Image : data.Gif}
                  alt={`${data.Name} Website`}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                />
              </a>
            </div>
            <div className="ProjectRightBox">
              <h1 className="ProjectCardHeader">Tech Stack</h1>
              <div className="TechStack">
                <div>
                  <h5>Frontend</h5>
                  <ol>
                    {data.FrontEnd.map((tech, key) => {
                      return <li key={key}>{tech}</li>;
                    })}
                  </ol>
                </div>
                <div>
                  <h5>Backend</h5>
                  <ol>
                    {data.BackEnd.map((tech, key) => {
                      return <li key={key}>{tech}</li>;
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="ProjectRightBox">
              <h1 className="ProjectCardHeader">Tech Stack</h1>
              <div className="TechStack">
                <div>
                  <h5>Frontend</h5>
                  <ol>
                    {data.FrontEnd.map((tech, key) => {
                      return <li key={key}>{tech}</li>;
                    })}
                  </ol>
                </div>
                <div>
                  <h5>Backend</h5>
                  <ol>
                    {data.BackEnd.map((tech, key) => {
                      return <li key={key}>{tech}</li>;
                    })}
                  </ol>
                </div>
              </div>
            </div>
            <div className="ProjectLeftBox">
              <h1 className="ProjectCardHeader">{data.Name}</h1>
              <a href="https://www.freehold.dev/">
                <img
                  className="ProjectGif"
                  src={!hover ? data.Image : data.Gif}
                  alt={`${data.Name} Website`}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                />
              </a>
            </div>
          </>
        )}
      </div>
      <div className="ViewCode">
        <div className="CodeLinks">
          {data.ViewFrontEndCode ? (
            <a href={data.ViewFrontEndCode}> View Frontend Code </a>
          ) : null}
          {data.ViewBackEndCode ? (
            <a href={data.ViewBackEndCode}> View Backend Code </a>
          ) : null}
          {data.ViewDemo ? <a href={data.ViewDemo}> View Demo </a> : null}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
