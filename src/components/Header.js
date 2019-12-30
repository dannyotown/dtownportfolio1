import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="headerText" class="ScrollToHeader">
      <div className="headerBox">
        <p className="headerFont">
          Hello, I'm <span className="nameSpan">Danny Town</span>.
        </p>
        <p className="headerFont">I'm a full-stack web developer.</p>
        <Link
          activeClass="active"
          to="ScrollToContact"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
          style={{ margin: "0 auto", marginTop: ".5%" }}
        >
          <button className="headerButton">Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
