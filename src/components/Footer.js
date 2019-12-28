import React from "react";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

function Footer() {
  return (
    <div className="ContactFooter">
      <div className="LogoBox">
        <div className="FooterBox">
          {" "}
          <img
            src={github}
            alt="GitHub Logo"
            onClick={() =>
              (window.location.href = `https://github.com/dannyotown`)
            }
          />
        </div>
        <div className="FooterBox">
          <img
            src={linkedin}
            alt="LinkedIn Logo"
            onClick={() =>
              (window.location.href = `https://www.linkedin.com/in/danny-town-73519084/`)
            }
          />
        </div>
      </div>
      <div className="FooterText">Danny Town ©2019</div>
    </div>
  );
}

export default Footer;
