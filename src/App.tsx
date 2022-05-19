import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageLayout from "./components/PageLayout/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/curriculum" element={<Home />} />
          {/* <Route path="/products/:id" component={Product} /> */}
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
