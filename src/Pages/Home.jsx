import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
   
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

     
      <div className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose CarHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Expert Team</h3>
              <p className="text-gray-700">Our experienced professionals are dedicated to providing top-quality service.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Fast Service</h3>
              <p className="text-gray-700">Quick turnaround times without compromising on quality and excellence.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Affordable Prices</h3>
              <p className="text-gray-700">Competitive pricing that fits your budget without hidden charges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
