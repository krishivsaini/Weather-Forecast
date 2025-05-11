import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeatherApp from "./components/WeatherApp";
import About from "./components/About";
import Contact from "./components/Contact";
// import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
