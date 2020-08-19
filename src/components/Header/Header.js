import React from "react";
import { Link } from "react-scroll";
import DownArrow from "./imgs/DownArrow.png";

function Header() {
  return (
    <>
      <div className="headerText" id="ScrollToHeader">
        <div className="headerBox">
          <p className="headerFont">
            <span className="nameSpan">Danny</span>
          </p>
          <p className="headerFont">Town</p>
          <Link
            activeClass="active"
            to="ScrollToAboutMe"
            spy={false}
            smooth={false}
            hashSpy={false}
            offset={-20}
            duration={500}
            delay={200}
            isDynamic={false}
            ignoreCancelEvents={false}
            style={{
              margin: "0 auto",
            }}
          >
            <img src={DownArrow} alt="Down Arrow" className="headerArrow"></img>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
