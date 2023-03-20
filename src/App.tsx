import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { EmailProvider } from "./contexts/EmailContext";
import { NewsProvider } from "./contexts/NewsContext";
import { DynamicThemeProvider } from "./contexts/ThemeContext";
import "./index.css";
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

  return (
    <DynamicThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/portfolio"
            element={
              <EmailProvider>
                <NewsProvider>
                  <Home />
                </NewsProvider>
              </EmailProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </DynamicThemeProvider>
  );
}

export default App;
