import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to CarHub</h1>
          <p className="text-xl mb-8 text-blue-100">
            Your one-stop destination for premium car services and solutions
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/service" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              Explore Services
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      </div>

      )
}

export default Home
