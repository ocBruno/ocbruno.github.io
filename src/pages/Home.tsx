import React from "react";
import "./Home.css";
import EmailWidget from "../components/EmailWidget/EmailWidget";
import HeroSection from "./Home/components/HeroSection/HeroSection";
import SummarySection from "./Home/components/SummarySection/SummarySection";
import ExperienceSection from "./Home/components/ExperienceSection/ExperienceSection";

function Home() {
  return (
    <div className="HomePageContainer">
      <HeroSection />
      <SummarySection />
      <ExperienceSection />

      <EmailWidget />
    </div>
  );
}

export default Home;
