import React, { useEffect } from "react";
import "./Home.css";
// import EmailWidget from "../components/EmailWidget/EmailWidget";
import HeroSection from "./Home/components/HeroSection/HeroSection";
import SummarySection from "./Home/components/SummarySection/SummarySection";
import ExperienceSection from "./Home/components/ExperienceSection/ExperienceSection";
import gsap from "gsap";

function Home() {
  useEffect(() => {
    //  tween header box shadow style 3d
    gsap.to(".HomePageBgContainer", {
      scrollTrigger: {
        trigger: "HomePageContainer",
        end: "bottom",
        scrub: true,
        markers: false,
      },
      background: "rgba(0, 0 ,0, 0.0)",
    });
  }, []);
  return (
    <div className="HomePageContainer">
      <div className="HomePageBgContainer"></div>
      <HeroSection />
      <SummarySection />
      <ExperienceSection />

      {/* <EmailWidget /> */}
    </div>
  );
}

export default Home;
