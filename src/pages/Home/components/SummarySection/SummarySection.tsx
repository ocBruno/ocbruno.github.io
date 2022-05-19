import React, { useEffect } from "react";
import "./SummarySection.css";
import recruiteeAvatar from "./recruiteeAvatar.jpg";

function SummarySection() {
  useEffect(() => {
    //  tween header box shadow style 3d
  }, []);
  return (
    <section id="Summary_Section" className="summary-section">
      <img
        src={recruiteeAvatar}
        alt="Bruno's Portrait"
        className="recruitee-avatar"
      />
      <section>
        <h3>
          A frontend web developer searching for a new remote opportunity!
        </h3>
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
