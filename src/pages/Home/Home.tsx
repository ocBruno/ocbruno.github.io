import React from "react";
import "./Home.scss";
import HeroSection from "../Home/components/HeroSection/HeroSection";
import SummarySection from "../Home/components/SummarySection/SummarySection";
import ExperienceSection from "../Home/components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  const handleScroll = (e: Object) => {
    console.log(e);
  };
  return (
    <div className="home-page-container" onWheel={handleScroll}>
      <div className="home-page-bg-container"></div>
      <Navbar />
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default Home;
