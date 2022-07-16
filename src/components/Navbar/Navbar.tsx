import React from "react";
import { scrollToClassName } from "../../utils/gsap";
import { useNews } from "../../contexts/NewsContext";
import { LocalNewsButton, NavbarContainer, NavbarLinks } from "./Navbar.styled";
import { useTheme } from "../../contexts/ThemeContext";

function Navbar() {
  const [{ isDropdownActive }, dispatch] = useNews();
  const { toggleTheme } = useTheme();
  return (
    <NavbarContainer>
      <NavbarLinks>
        <li>
          <button onClick={() => scrollToClassName(".summary-section")}>Summary</button>
        </li>
        <li>
          <button onClick={() => scrollToClassName(".experience-section")}>Experience</button>
        </li>
        <li>
          <LocalNewsButton onClick={() => dispatch({ type: "TOGGLE_DROPDOWN" })}>
            {isDropdownActive ? `Close News` : `Top News`}
          </LocalNewsButton>
        </li>
        <li>
          <button onClick={() => toggleTheme()}>Invert theme</button>
        </li>
      </NavbarLinks>
    </NavbarContainer>
  );
}

export default Navbar;
