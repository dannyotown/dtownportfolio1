import React from "react";
import Particles from "react-particles-js";
function HeaderAnimation() {
  const particlez = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "random"
      },
      shape: {
        type: "edge",
        stroke: {
          width: 1.5,
          color: "#0094c6"
        }
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: "#e31b6d",
        opacity: 0.4,
        width: 2
      }
    }
  };
  return (
    <div style={{ backgroundColor: "#191919", height: "100vh" }}>
      <Particles params={particlez} />
    </div>
  );
}

export default HeaderAnimation;
