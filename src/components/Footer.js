import React from "react";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

function Footer() {
  return (
    <div className="ContactFooter">
      <div className="LogoBox">
        <div className="FooterBox">
          {" "}
          <img src={github} alt="GitHub Logo" />
        </div>
        <div className="FooterBox">
          <img src={linkedin} alt="LinkedIn Logo" />
        </div>
      </div>
      <div className="FooterText">Danny Town ©2019</div>
    </div>
  );
}

export default Footer;
