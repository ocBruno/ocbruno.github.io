import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavbarContainer">
      <ul className="NavbarLinks">
        <li>
          {/* only show after 100% of vh has been scrolled */}
          {/* <Link to="/">Who </Link> */}
        </li>
        <li>
          <Link to="/summary">Summary</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
