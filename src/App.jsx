import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import PopularCars from './Pages/PopularCars'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular-cars" element={<PopularCars />} />
          <Route path="/service" element={<div>Service Page</div>} />
          <Route path="/portfolio" element={<div>Portfolio Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
