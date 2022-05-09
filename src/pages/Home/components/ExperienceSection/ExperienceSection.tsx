import React from "react";
import "./ExperienceSection.css";

function ExperienceSection() {
  return (
    <section className="ExperienceSection">
      <h2 className="Section-header">Experience</h2>
      <article className="Experience">
        <h3 className="Section-subheader">Leankeep - Facility Software</h3>
        <i> Junior Frontend Developer </i>
        <div>April 2021 - March 2022 (1 year)</div>
        <div>Curitiba, Paraná, Brazil</div>
        <div>
          Creating, maintaining and updating projects with new pages/features,
          troubleshooting and bug fixing using HTML5, CSS3, JavaScript, React,
          Git/Bitbucket, and other frameworks/libraries/tools in an agile team
          with daily / weekly meetings.
        </div>
      </article>
      <article className="Experience">
        <h3 className="Section-subheader">Rhavi Carneiro's Fluency Academy </h3>
        <i>Junior Frontend Web Developer</i>
        <div>Curitiba, Paraná, Brazil</div>
        <div>February 2020-November 2020 (10 months)</div>
        Office and remote experience with frontend web development using HTML5,
        SCSS, Javascript, React, storybook,styled-components and other
        frameworks/libraries creatingresponsive reusable components in an agile
        team with daily / weeklytech meetings in English and Portuguese.
      </article>
      <article className="Experience">
        <h3 className="Section-subheader"> Dohms Web</h3>
        <i> Web Development Intern </i>
        <div>May 2019 - September 2019 (5 months)</div>
        <div>Curitiba, Paraná, Brazil</div>
        Develop and maintain systems and websites using HTML, CSS,
        Javascript,Vue, MSSQL, Salesforce, among others. Education Universidade
        Tuiuti do Paraná Associate's degree, Graphic Design · (2016 - 2018)
      </article>
    </section>
  );
}

export default ExperienceSection;
