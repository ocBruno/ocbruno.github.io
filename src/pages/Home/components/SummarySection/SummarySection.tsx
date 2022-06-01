import React, { useEffect } from "react";
import { fadeInElement } from "../../../../utils/gsap";
import "./SummarySection.scss";

function SummarySection() {
  useEffect(() => {
    //  tween header box shadow style 3d
    fadeInElement(".summary-section");
  }, []);
  return (
    <section id="Summary_Section" className="summary-section neomorph">
      <div></div>

      <section>
        <h2>
          Frontend react developer searching for a new remote opportunity!
        </h2>
        <ul>
          <li>
            2+ years of work experience using multiple languages, libraries and
            tools.
          </li>
          <li>Fluent in English and Brazilian Portuguese.</li>
          <li>On-site and remote experience in an agile team.</li>
          <li>Usability and graphic design skills.</li>
        </ul>
      </section>
    </section>
  );
}

export default SummarySection;
