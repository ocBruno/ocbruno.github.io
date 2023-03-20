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
          <div className="front bg-violet-900 rounded-sm"></div>
          <div className="back bg-violet-800 rounded-sm"></div>
          <div className="top bg-violet-700 rounded-sm"></div>
          <div className="bottom bg-violet-600 rounded-sm"></div>
          <div className="right bg-violet-500 rounded-sm"></div>
          <div className="left bg-violet-400 rounded-sm"></div>
        </Cube>
      </div>
    </div>
  );
}

export default Hero3DBackground;
