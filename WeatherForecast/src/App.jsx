import React from 'react'
import WeatherApp from './components/WeatherApp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
// import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div>
          <WeatherApp/>
        </div>
      </Router>
    </>
  )
}

export default App
