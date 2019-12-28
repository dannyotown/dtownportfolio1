import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./Contact";
import Footer from "./Footer";
import ScrollUpButton from "./ScrollUp";

function MainBody() {
  const [displayButton, setDisplayButton] = useState(false);
  useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        if (window.scrollY >= 1200) {
          setDisplayButton(true);
        } else {
          setDisplayButton(false);
        }
      },
      true
    );
  });
  return (
    <>
      <div className="MainBody">
        <NavBar />
        <AboutMe />
        {displayButton ? <ScrollUpButton /> : null}
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default MainBody;
