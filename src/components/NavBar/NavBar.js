import React, { useEffect } from "react";
import { Link } from "react-scroll";

function NavBar() {
  useEffect(() => {
    document.getElementById("hamburgerMenu").addEventListener("click", () => {
      const navItems = document.getElementsByClassName("navButtons");
      for (let items of navItems) {
        items.classList.toggle("displayNav");
      }
    });
  }, []);
  return (
    <>
      <nav className="navBarMain">
        <Link
          activeClass="active"
          to="ScrollToHeader"
          spy={false}
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
          spy={false}
          smooth={true}
          hashSpy={true}
          offset={-200}
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
          spy={false}
          smooth={true}
          hashSpy={true}
          offset={-200}
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
          spy={false}
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
        <div
          className="navButtons addPad iphoneScreen"
          id="iphoneScreen"
          onMouseEnter={() =>
            document
              .getElementById("iphoneScreen")
              .classList.toggle("colorChange")
          }
          onMouseLeave={() =>
            document
              .getElementById("iphoneScreen")
              .classList.toggle("colorChange")
          }
        >
          <div className="hamburgerFlex" id="hamburgerMenu">
            <div className="hamburgerIcon"></div>
            <div className="hamburgerIcon"></div>
            <div className="hamburgerIcon"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
