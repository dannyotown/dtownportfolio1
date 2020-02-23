import React from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./Contact";
import Footer from "./Footer";

function MainBody() {
  return (
    <>
      <div className="MainBody">
        <NavBar />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default MainBody;
