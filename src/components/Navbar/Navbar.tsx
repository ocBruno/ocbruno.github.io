import React from "react";
import { scrollToClassName } from "../../utils/gsap";
import { useNews } from "../../contexts/NewsContext";
import { LocalNewsButton, NavbarContainer, NavbarLinks, NavButton, NavButtonLink } from "./Navbar.styled";
import { useTheme } from "../../contexts/ThemeContext";

function Navbar() {
  const [{ isDropdownActive }, dispatch] = useNews();
  const { toggleTheme } = useTheme();
  return (
    <NavbarContainer>
      <NavbarLinks>
        <NavButtonLink>
          <NavButton onClick={() => scrollToClassName(".summary-section")}>Summary</NavButton>
        </NavButtonLink>
        <NavButtonLink>
          <NavButton onClick={() => scrollToClassName(".experience-section")}>Experience</NavButton>
        </NavButtonLink>
        {/* <NavButtonLink>
          <LocalNewsButton onClick={() => dispatch({ type: "TOGGLE_DROPDOWN" })}>
            {isDropdownActive ? `Close News` : `Top News`}
          </LocalNewsButton>
        </NavButtonLink> */}
        <NavButtonLink>
          <NavButton onClick={() => toggleTheme()} data-testid="toggle-theme-button">
            Invert theme
          </NavButton>
        </NavButtonLink>
      </NavbarLinks>
    </NavbarContainer>
  );
}

export default Navbar;
