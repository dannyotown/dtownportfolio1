import React from "react";
import waveTop from "../img/waveTop.png";
import waveMid from "../img/waveMid.png";
import waveBot from "../img/waveBot.png";

function HeaderAnimation() {
  return (
    <div className="waveWrapper waveAnimation">
      <div className="waveWrapperInner bgTop">
        <div
          className="wave waveTop"
          style={{
            backgroundImage: `url(${waveTop})`
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          style={{
            backgroundImage: `url(${waveMid})`
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage: `url(${waveBot})`
          }}
        ></div>
      </div>
    </div>
  );
}

export default HeaderAnimation;
