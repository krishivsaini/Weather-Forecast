import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from "./components/WeatherApp.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from './components/Login.jsx';
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<WeatherApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
