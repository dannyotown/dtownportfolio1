import React from "react";
import aws from "./imgs/aws.png";
import html5 from "./imgs/html5.png";
import node from "./imgs/node.png";
import react from "./imgs/react.png";
import redux from "./imgs/redux.png";
import sass from "./imgs/sass.png";
import csharp from "./imgs/csharp.png";

function AboutMe() {
  return (
    <>
      <div className="AboutMe" id="ScrollToAboutMe">
        <h1>About</h1>
        <div className="AboutUnderline"></div>
        <div className="AboutMeFlex">
          <div className="AboutMeTextBox">
            <div className="AboutMeText">
              <h2 id="WhoAmI">Who Am I?</h2>
              Hi, My Name is Danny Town. I am a full-stack developer who enjoys
              creating dynamic & responsive websites. I graduated from Indiana
              University with a degree in Informatics. I am currently attending
              Lambda school for full-stack development. If you have any
              questions please feel free to contact me.
            </div>
          </div>
          <div className="AboutMeImages">
            <img className="imageAboutMe" src={react} alt="React Logo" />
            <img className="imageAboutMe" src={html5} alt="HTML Logo" />
            <img className="imageAboutMe" src={node} alt="Node.js Logo" />
            <img className="imageAboutMe" src={redux} alt="Redux Logo" />
            <img
              className="imageAboutMe"
              src={aws}
              alt="Amazon Web Services Logo"
            />
            <img className="imageAboutMe" src={sass} alt="Sass Logo" />
            <img className="imageAboutMe" src={csharp} alt="C# Logo" />
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default AboutMe;
