import React from "react";
import arrow from "../img/arrow.png";

function ScrollUpButton() {
  return (
    <>
      <button className="ScrollUpButton" onClick={() => window.scrollTo(0, 0)}>
        {" "}
        <img src={arrow} alt="Up Arrow" />
      </button>
    </>
  );
}

export default ScrollUpButton;
