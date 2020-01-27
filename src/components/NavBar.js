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
          className="navButtons addPad"
          id="nav1"
        >
          <div
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
          offset={-25}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
          className="navButtons addPad"
          id="nav2"
        >
          <div
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
          offset={-40}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
          className="navButtons addPad"
          id="nav3"
        >
          <div
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
          className="navButtons addPad"
          id="nav4"
        >
          <div
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
        <div className="hamBurgerFlex">
          <div className="hamBurgerMenu"></div>
          <div className="hamBurgerMenu"></div>
          <div className="hamBurgerMenu"></div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
