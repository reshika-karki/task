import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Home from './Pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<div>Service Page</div>} />
          <Route path="/portfolio" element={<div>Portfolio Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App
