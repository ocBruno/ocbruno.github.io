import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

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
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
