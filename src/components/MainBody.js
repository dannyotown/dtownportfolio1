import React from "react";
import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import ContactMe from "./Contact/Contact";
import Footer from "./Footer/Footer";

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
