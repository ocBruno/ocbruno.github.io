import styled from "styled-components";

export const LocalNewsButton = styled.button``;
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 2.5rem;
  z-index: 5;
`;
export const NavbarLinks = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;
export const NavButtonLink = styled.li``;
export const NavButton = styled.button`
  margin: 0 6px;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`;
