import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

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
        <Route path="/curriculum" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
