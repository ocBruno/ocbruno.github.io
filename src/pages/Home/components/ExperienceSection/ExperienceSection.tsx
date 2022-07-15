import React, { useEffect } from "react";
import { fadeInElement } from "../../../../utils/gsap";
import "./ExperienceSection.scss";

function ExperienceSection() {
  useEffect(() => {
    //  tween header box shadow style 3d
    fadeInElement(".experience-section", 2.1);
  }, []);
  return (
    <section className="experience-section">
      <h2 className="experience-header">Experience</h2>
      <article className="experience-item">
        <h3 className="section-subheader">Leankeep - Facility Software</h3>
        <i> Junior Frontend Developer </i>
        <div>April 2021 - March 2022 (1 year)</div>
        <div>Curitiba, Paraná, Brazil</div>
        <p>
          Creating, maintaining and updating projects with new pages/features,
          troubleshooting and bug fixing using HTML5, CSS3, JavaScript, React,
          Git/Bitbucket, and other frameworks/libraries/tools in an agile team
          with daily / weekly meetings.
        </p>
      </article>
      <article className="experience-item">
        <h3 className="section-subheader">Rhavi Carneiro's Fluency Academy </h3>
        <i>Junior Frontend Web Developer</i>
        <div>Curitiba, Paraná, Brazil</div>
        <div>February 2020-November 2020 (10 months)</div>
        <p>
          Office and remote experience with frontend web development using
          HTML5, SCSS, Javascript, React, storybook,styled-components and other
          frameworks/libraries creatingresponsive reusable components in an
          agile team with daily / weeklytech meetings in English and Portuguese.
        </p>
      </article>
      <article className="experience-item">
        <h3 className="section-subheader"> Dohms Web</h3>
        <i> Web Development Intern </i>
        <div>May 2019 - September 2019 (5 months)</div>
        <div>Curitiba, Paraná, Brazil</div>
        <p>
          Develop and maintain systems and websites using HTML, CSS,
          Javascript,Vue, MSSQL, Salesforce, among others.
        </p>
      </article>
    </section>
  );
}

export default ExperienceSection;
