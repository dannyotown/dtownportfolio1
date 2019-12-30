import React from "react";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <>
      <nav className="navBarMain">
        <Link
          activeClass="active"
          to="ScrollToHeader"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-50}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
        >
          <div
            className="navButtons"
            id="nav1"
            onMouseEnter={() =>
              document.getElementById("nav1").classList.toggle("colorChange")
            }
            onMouseLeave={() =>
              document.getElementById("nav1").classList.toggle("colorChange")
            }
          >
            HOME
          </div>
        </Link>
        <Link
          activeClass="active"
          to="ScrollToAboutMe"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
        >
          <div
            className="navButtons"
            id="nav2"
            onMouseEnter={() =>
              document.getElementById("nav2").classList.toggle("colorChange")
            }
            onMouseLeave={() =>
              document.getElementById("nav2").classList.toggle("colorChange")
            }
          >
            ABOUT
          </div>
        </Link>
        <Link
          activeClass="active"
          to="ScrollToProjects"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-10}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
        >
          <div
            className="navButtons"
            id="nav3"
            onMouseEnter={() =>
              document.getElementById("nav3").classList.toggle("colorChange")
            }
            onMouseLeave={() =>
              document.getElementById("nav3").classList.toggle("colorChange")
            }
          >
            PORTFOLIO
          </div>
        </Link>
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
        >
          <div
            className="navButtons"
            id="nav4"
            onMouseEnter={() =>
              document.getElementById("nav4").classList.toggle("colorChange")
            }
            onMouseLeave={() =>
              document.getElementById("nav4").classList.toggle("colorChange")
            }
          >
            CONTACT
          </div>
        </Link>
      </nav>
      <div className="navLine"></div>
    </>
  );
}

export default NavBar;
