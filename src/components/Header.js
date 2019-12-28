import React from "react";

function Header() {
  return (
    <div className="headerText">
      <div className="headerBox">
        <p className="headerFont">
          Hello, I'm <span className="nameSpan">Danny Town.</span>
        </p>
        <p className="headerFont">I'm a full-stack web developer.</p>
        <button
          className="headerButton"
          onClick={() => window.scrollTo(0, 10000)}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Header;
