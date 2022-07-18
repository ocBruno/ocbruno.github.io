import React from "react";
import "./Home.styled.tsx";
import HeroSection from "../Home/components/HeroSection/HeroSection";
import SummarySection from "../Home/components/SummarySection/SummarySection";
import ExperienceSection from "../Home/components/ExperienceSection/ExperienceSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import FixedEmailForm from "../../components/FixedEmailForm/FixedEmailForm";
import { useEmail } from "../../contexts/EmailContext";
// import NewsDropdown from "../../components/NewsDropdown/NewsDropdown";
import { HomePageBgContainer, HomePageContainer } from "./Home.styled";

function Home() {
  const [{ isFormActive }, dispatch] = useEmail();
  const handleScroll = (e: Object) => {
    if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight && !isFormActive) {
      dispatch({ type: "TOGGLE_FORM_ACTIVE" });
    }
  };
  return (
    <HomePageContainer onWheel={handleScroll}>
      <HomePageBgContainer></HomePageBgContainer>
      <Navbar />
      {/* <FixedEmailForm /> */}
      {/* <NewsDropdown /> */}
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <Footer />
    </HomePageContainer>
  );
}

export default Home;
