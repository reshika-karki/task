import React from 'react'

const cars = [
  {
    id: 1,
    name: 'Sedan Model X',
    price: '$25,000',
    description: 'A sleek sedan with top performance and comfort.',
    image: 'https://via.placeholder.com/300x200?text=Sedan+Model+X'
  },
  {
    id: 2,
    name: 'SUV All-Terrain',
    price: '$40,000',
    description: 'Robust SUV built for both city and off-road adventures.',
    image: 'https://via.placeholder.com/300x200?text=SUV+All-Terrain'
  },
  {
    id: 3,
    name: 'Convertible Breeze',
    price: '$35,000',
    description: 'Enjoy open-air driving with style and elegance.',
    image: 'https://via.placeholder.com/300x200?text=Convertible+Breeze'
  },
  {
    id: 4,
    name: 'Hatchback Speedy',
    price: '$20,000',
    description: 'Compact and efficient, perfect for urban driving.',
    image: 'https://via.placeholder.com/300x200?text=Hatchback+Speedy'
  }
]

const Cars = () => {
  return (
    <div className="py-16 px-5">
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-gradient-to-r bg-black/40
         text-white py-16 px-5 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-blue-100">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Show Some Cars</h2>
              CarHub is your premier destination for discovering and purchasing high-quality vehicles. We offer a wide range of cars to suit every need and budget, ensuring you find the perfect ride for your lifestyle.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {cars.map(car => (
            <div key={car.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-blue-600">{car.name}</h3>
              <p className="text-xl font-semibold text-gray-800 mb-2">{car.price}</p>
              <p className="text-gray-700 mb-4">{car.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cars
