import React from "react";
import { Link } from "react-scroll";
import DownArrow from "../img/DownArrow.png";

function Header() {
  return (
    <div className="headerText" id="ScrollToHeader">
      <div className="headerBox">
        <p className="headerFont">
          <span className="nameSpan">Danny</span>
        </p>
        <p className="headerFont">Town</p>
        <Link
          activeClass="active"
          to="ScrollToAboutMe"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-20}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
          style={{ margin: "0 auto", marginTop: ".5%", fontFamily: "Raleway" }}
        >
          <img src={DownArrow} alt="Down Arrow" className="headerArrow"></img>
        </Link>
      </div>
    </div>
  );
}

export default Header;
