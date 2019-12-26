import React from "react";

function NavBar() {
  return (
    <>
      <nav className="navBarMain">
        <div
          className="navButtons"
          id="nav1"
          onMouseEnter={() =>
            document.getElementById("nav1").classList.toggle("colorChange")
          }
          onMouseLeave={() =>
            document.getElementById("nav1").classList.toggle("colorChange")
          }
          onClick={() => window.scrollTo(0, 0)}
        >
          HOME
        </div>
        <div
          className="navButtons"
          id="nav2"
          onMouseEnter={() =>
            document.getElementById("nav2").classList.toggle("colorChange")
          }
          onMouseLeave={() =>
            document.getElementById("nav2").classList.toggle("colorChange")
          }
          onClick={() => window.scrollTo(0, 900)}
        >
          ABOUT
        </div>
        <div
          className="navButtons"
          id="nav3"
          onMouseEnter={() =>
            document.getElementById("nav3").classList.toggle("colorChange")
          }
          onMouseLeave={() =>
            document.getElementById("nav3").classList.toggle("colorChange")
          }
          onClick={() => window.scrollTo(0, 1800)}
        >
          PORTFOLIO
        </div>
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
      </nav>
      <div className="navLine"></div>
    </>
  );
}

export default NavBar;
