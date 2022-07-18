import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
export const themes = {
  light: {
    name: "light",
    colors: {
      primary: "lightblue",
      black: "black",
      background: "white",
      text: "black",
      border: "grey",
    },
  },
  dark: {
    name: "dark",
    colors: {
      primary: "darkbue",
      black: "black",
      background: "#332e46",
      text: "#b3ad99",
      border: "grey",
    },
  },
};
export const initialState = themes.dark;
interface IDynamicThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

export interface ITheme {
  name: string;
  colors: {
    primary: string;
    black: string;
    background: string;
    border: string;
    text: string;
  };
}

const DynamicThemeContext = React.createContext({} as IDynamicThemeContext);
DynamicThemeContext.displayName = "ThemeContet";

const DynamicThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [activeTheme, setActiveTheme] = React.useState(themes.dark);
  const toggleTheme = React.useCallback(() => {
    setActiveTheme(activeTheme.name === "dark" ? themes.light : themes.dark);
  }, [activeTheme]);
  const value = { theme: activeTheme, toggleTheme };
  return (
    <DynamicThemeContext.Provider value={value}>
      <ThemeProvider theme={activeTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </DynamicThemeContext.Provider>
  );
};
const useTheme = () => {
  const context = React.useContext(DynamicThemeContext);

  return context;
};
export { useTheme, DynamicThemeProvider };
