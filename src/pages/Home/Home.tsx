import React from "react";
import "./Home.scss";
import HeroSection from "../Home/components/HeroSection/HeroSection";
import SummarySection from "../Home/components/SummarySection/SummarySection";
import ExperienceSection from "../Home/components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import FixedEmailForm from "../../components/FixedEmailForm/FixedEmailForm";
import { useEmail } from "../../contexts/EmailContext";

function Home() {
  const [{ isFormActive }, dispatch] = useEmail();
  const handleScroll = (e: Object) => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight &&
      !isFormActive
    ) {
      dispatch({ type: "TOGGLE_FORM_ACTIVE" });
      console.log("form active");
    }
  };
  return (
    <div className="home-page-container" onWheel={handleScroll}>
      <div className="home-page-bg-container"></div>
      {/* <FixedEmailForm /> */}
      <Navbar />
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default Home;
