import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { EmailProvider } from "./contexts/EmailContext";
import { ThemeProvider } from "styled-components";

function App() {
  useEffect(() => {
    let dots = 0;

    setInterval(() => {
      if (dots === 0) {
        dots++;
      } else {
        dots = 0;
      }
      document.title = "Contact Me " + "|".repeat(dots);
    }, 1000);
  }, []);
  const LightTheme = {
    TextColor: "white",
  };
  const DarkTheme = {
    TextColor: "black",
  };
  const [isDarkThemeActive, setIsDarkThemeActive] = React.useState(false);
  const DynamicThemeProvider = ({ children }: { children: JSX.Element }) => {
    if (isDarkThemeActive) {
      return <ThemeProvider theme={DarkTheme}>{children}</ThemeProvider>;
    } else {
      return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>;
    }
  };
  return (
    <DynamicThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/portfolio"
            element={
              <EmailProvider>
                <Home />
              </EmailProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </DynamicThemeProvider>
  );
}

export default App;
