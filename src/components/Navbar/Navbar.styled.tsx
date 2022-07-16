import styled from "styled-components";

export const LocalNewsButton = styled.button``;
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 36px;
  margin-left: 12px;
  z-index: 5;
`;
export const NavbarLinks = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;

  li > * {
    color: ${(props) => props.theme.colors.text};
  }
  button,
  a {
    margin: 0 6px;
    color: $text-color;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
