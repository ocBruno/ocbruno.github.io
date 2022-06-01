import React from "react";
import "./Navbar.scss";
import { scrollToClassName } from "../../utils/gsap";

function Navbar() {
  return (
    <nav className="navbar-container ">
      <ul className="navbar-links">
        <li>
          <button onClick={() => scrollToClassName(".summary-section")}>
            Summary
          </button>
        </li>
        <li>
          <button onClick={() => scrollToClassName(".experience-section")}>
            Experience
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
