import { createGlobalStyle } from "styled-components";
import { ITheme } from ".";

export default createGlobalStyle<{ theme: ITheme }>`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background};
  }
`;
