import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Home from './assets/pages/Home.jsx'
 import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AboutSection from './assets/pages/About.jsx'

function App() {
  const [count, setCount] = useState(0)

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
