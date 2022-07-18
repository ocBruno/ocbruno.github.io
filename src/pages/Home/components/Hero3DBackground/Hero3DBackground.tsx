import React, { useEffect } from "react";
import "./Hero3DBackground.scss";
import { Cube } from "./Hero3DBackground.styled";

function Hero3DBackground() {
  useEffect(() => {
    //  tween header box shadow style 3d
  }, []);
  return (
    <div className="scene-container">
      <div className="scene">
        <Cube>
          <div className="front"></div>
          <div className="back"></div>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="right"></div>
          <div className="left"></div>
        </Cube>
      </div>
    </div>
  );
}

export default Hero3DBackground;
