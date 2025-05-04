import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './assets/pages/Home.jsx'
 import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AboutSection from './assets/pages/About.jsx'

function App() {
 

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
