import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Cars from './Pages/Cars'
import Contact from './Pages/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
