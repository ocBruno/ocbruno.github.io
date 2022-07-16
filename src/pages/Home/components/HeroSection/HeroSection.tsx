import React, { useEffect } from "react";
import "./HeroSection.styled.tsx";
import Hero3DBackground from "../Hero3DBackground/Hero3DBackground";
import { scrollToClassName } from "../../../../utils/gsap";
import { RecruiteeHeader } from "./HeroSection.styled";

function HeroSection() {
  useEffect(() => {
    //  tween header box shadow style 3d
  }, []);

  return (
    <div className="OuterContent hero-section">
      {/* box shadow animate on scroll trigger */}
      <RecruiteeHeader>
        <Hero3DBackground />
        <h1 className="recruitee-name neomorph">Bruno Costa</h1>
        <h2 className="recruitee-headline neomorph">Frontend Developer</h2>
      </RecruiteeHeader>
      <button onClick={() => scrollToClassName(".summary-section")} className="next-section-arrow-button">
        <svg width="20px" height="20px" fill="rgb(200, 200, 200)" viewBox="0 0 122.88 120.64" xmlSpace="preserve">
          <g>
            <path d="M108.91,54.03c1.63-1.55,3.74-2.31,5.85-2.28c2.11,0.03,4.2,0.84,5.79,2.44l0.12,0.12c1.5,1.58,2.23,3.6,2.2,5.61 c-0.03,2.01-0.82,4.02-2.37,5.55c-17.66,17.66-35.61,35.13-53.4,52.68c-0.05,0.07-0.1,0.13-0.16,0.19 c-1.63,1.55-3.76,2.31-5.87,2.28c-2.11-0.03-4.21-0.85-5.8-2.45l-0.26-0.27C37.47,100.43,19.87,82.98,2.36,65.46 C0.82,63.93,0.03,61.93,0,59.92c-0.03-2.01,0.7-4.03,2.21-5.61l0.15-0.15c1.58-1.57,3.66-2.38,5.76-2.41 c2.1-0.03,4.22,0.73,5.85,2.28l47.27,47.22L108.91,54.03L108.91,54.03z M106.91,2.26c1.62-1.54,3.73-2.29,5.83-2.26 c2.11,0.03,4.2,0.84,5.79,2.44l0.12,0.12c1.5,1.57,2.23,3.6,2.21,5.61c-0.03,2.01-0.82,4.02-2.37,5.55 C101.2,31.01,84.2,48.87,67.12,66.39c-0.05,0.07-0.11,0.14-0.17,0.21c-1.63,1.55-3.76,2.31-5.87,2.28 c-2.11-0.03-4.21-0.85-5.8-2.45C38.33,48.94,21.44,31.36,4.51,13.83l-0.13-0.12c-1.54-1.53-2.32-3.53-2.35-5.54 C2,6.16,2.73,4.14,4.23,2.56l0.15-0.15C5.96,0.84,8.05,0.03,10.14,0c2.1-0.03,4.22,0.73,5.85,2.28l45.24,47.18L106.91,2.26 L106.91,2.26z" />
          </g>
        </svg>
      </button>
      <div className="background-container">
        <svg width="1440" height="560" className="recruitee-background" viewBox="0 0 1440 560">
          <g clipPath='url("#SvgjsClipPath1175")' fill="none">
            <g>
              <circle className="circle" r="24.18" cx="381" cy="116.08" stroke="url(#SvgjsLinearGradient1176)"></circle>
              <circle r="54.27" cx="1400" cy="267.45" stroke="url(#SvgjsLinearGradient1177)"></circle>
              <circle r="38.83" cx="620.71" cy="529.33" stroke="url(#SvgjsLinearGradient1178)"></circle>
              <circle r="32.675" cx="534.22" cy="510.25" stroke="url(#SvgjsLinearGradient1179)"></circle>
              <circle r="20.935" cx="1154.33" cy="357.66" stroke="url(#SvgjsLinearGradient1180)"></circle>
              <circle r="37.98" cx="573.32" cy="465.88" stroke="url(#SvgjsLinearGradient1181)"></circle>
              <circle r="46.395" cx="720.88" cy="357.06" stroke="url(#SvgjsLinearGradient1182)"></circle>
              <circle r="37.88" cx="244.14" cy="445.55" stroke="url(#SvgjsLinearGradient1183)"></circle>
            </g>
          </g>
          <defs>
            <clipPath id="SvgjsClipPath1175">
              <rect width="1440" height="560" x="0" y="0"></rect>
            </clipPath>
            <linearGradient
              x1="333.34999999999997"
              y1="116.08"
              x2="430.06999999999994"
              y2="116.08"
              gradientUnits="userSpaceOnUse"
              id="SvgjsLinearGradient1176"
            >
              <stop stopColor="#ab3c51" offset="0.1"></stop>
              <stop stopColor="#4f4484" offset="0.9"></stop>
            </linearGradient>
            <linearGradient
              x1="736.38"
              y1="267.45"
              x2="953.46"
              y2="267.45"
              gradientUnits="userSpaceOnUse"
              id="SvgjsLinearGradient1177"
            >
              <stop stopColor="#32325d" offset="0.1"></stop>
              <stop stopColor="#424488" offset="0.9"></stop>
            </linearGradient>
            <linearGradient
              x1="543.0500000000001"
              y1="529.33"
              x2="698.3700000000001"
              y2="529.33"
              gradientUnits="userSpaceOnUse"
              id="SvgjsLinearGradient1178"
            >
              <stop stopColor="#84b6e0" offset="0.1"></stop>
              <stop stopColor="#464a8f" offset="0.9"></stop>
            </linearGradient>
            <linearGradient
              x1="468.87"
              y1="510.25"
              x2="599.5699999999999"
              y2="510.25"
              gradientUnits="userSpaceOnUse"
              id="SvgjsLinearGradient1179"
            >
              <stop stopColor="#84b6e0" offset="0.1"></stop>
              <stop stopColor="#464a8f" offset="0.9"></stop>
            </linearGradient>
            <linearGradient
              x1="1112.46"
              y1="357.66"
              x2="1196.2"
              y2="357.66"
              gradientUnits="userSpaceOnUse"
              id="SvgjsLinearGradient1180"
            >
              <stop stopColor="#ab3c51" offset="0.1"></stop>
              <stop stopColor="#4f4484" offset="0.9"></stop>
            </linearGradient>
            <linearGradient
              x1="497.36000000000007"
              y1="465.88"
              x2="649.2800000000001"
              y2="465.88"
              gradientUnits="userSpaceOnUse"
              id="SvgjsLinearGradient1181"
            >
              <stop stopColor="#32325d" offset="0.1"></stop>
              <stop stopColor="#424488" offset="0.9"></stop>
            </linearGradient>
            <linearGradient
              x1="628.09"
              y1="357.06"
              x2="813.6700000000001"
              y2="357.06"
              gradientUnits="userSpaceOnUse"
              id="SvgjsLinearGradient1182"
            >
              <stop stopColor="#e298de" offset="0.1"></stop>
              <stop stopColor="#484687" offset="0.9"></stop>
            </linearGradient>
            <linearGradient
              x1="168.38"
              y1="445.55"
              x2="319.9"
              y2="445.55"
              gradientUnits="userSpaceOnUse"
              id="SvgjsLinearGradient1183"
            >
              <stop stopColor="#f29b7c" offset="0.1"></stop>
              <stop stopColor="#7e6286" offset="0.9"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;
