import React from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function MainBody() {
  return (
    <>
      <div className="MainBody">
        <NavBar />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
}

export default MainBody;
