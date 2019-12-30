import React from "react";
import arrow from "../img/arrow.png";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-scroll";

function ScrollUpButton() {
  return (
    <Spring
      from={{ opacity: 0.1, marginTop: 50, marginRight: 500 }}
      to={{ opacity: 0.8, marginTop: 0, marginRight: 0 }}
      config={{ delay: 0, duration: 500 }}
    >
      {props => (
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
          <button style={props} className="ScrollUpButton">
            <img src={arrow} alt="Up Arrow" />
          </button>
        </Link>
      )}
    </Spring>
  );
}

export default ScrollUpButton;
