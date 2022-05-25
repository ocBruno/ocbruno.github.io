import React, { useEffect } from "react";
import "./Home.css";
import HeroSection from "../Home/components/HeroSection/HeroSection";
import SummarySection from "../Home/components/SummarySection/SummarySection";
import ExperienceSection from "../Home/components/ExperienceSection/ExperienceSection";
import gsap from "gsap";
import Footer from "./components/Footer/Footer";

function Home() {
  useEffect(() => {
    //  tween header box shadow style 3d
    gsap.to(".home-page-bg-container", {
      scrollTrigger: {
        end: "bottom",
        scrub: true,
        markers: false,
      },
      background: "rgba(0, 0 ,0, 0.0)",
    });
  }, []);
  const handleScroll = (e: Object) => {
    console.log(e);
  };
  return (
    <div className="home-page-container" onWheel={handleScroll}>
      <div className="home-page-bg-container"></div>
      <HeroSection />
      <SummarySection />
      <ExperienceSection />

      <Footer />
    </div>
  );
}

export default Home;
