import React, { useState } from 'react'

const PopularCars = () => {
  const [activeFuelType, setActiveFuelType] = useState('petrol')
  const [activeBudget, setActiveBudget] = useState('10-20')

  // Cars Under 10 Lakh
  const carsUnder10 = [
    {
      id: 1,
      name: 'Skoda Kylaq',
      price: 'Rs. 7.59 - 12.99 Lakh',
      fuelType: 'Petrol',
      image: '🚗',
      description: 'Compact SUV with European Engineering.',
      label: 'Popular'
    },
    {
      id: 2,
      name: 'Tata Punch EV',
      price: 'Rs. 6.50 - 9.50 Lakh',
      fuelType: 'EV',
      image: '🔋',
      description: 'Electric micro SUV with great range.'
    },
    {
      id: 3,
      name: 'Nissan Magnite',
      price: 'Rs. 5.65 - 8.94 Lakh',
      fuelType: 'Petrol',
      image: '🚗',
      description: 'Reliable and practical sedan option.'
    },
    {
      id: 4,
      name: 'Hyundai Venue',
      price: 'Rs. 8.00 - 15.69 Lakh',
      fuelType: 'Petrol',
      image: '🚙'
    }
  ]

  // Cars Above 10 Lakh - 10-20 Lakh
  const cars10to20 = [
    {
      id: 5,
      name: 'MG Windsor EV',
      price: 'Rs. 10.50 - 15.50 Lakh',
      fuelType: 'EV',
      image: '🔋'
    },
    {
      id: 6,
      name: 'Kia Seltos',
      price: 'Rs. 10.89 - 18.79 Lakh',
      fuelType: 'Petrol',
      image: '🚙'
    },
    {
      id: 7,
      name: 'Hyundai Creta',
      price: 'Rs. 11.00 - 19.00 Lakh',
      fuelType: 'Diesel',
      image: '🚙'
    },
    {
      id: 8,
      name: 'Mahindra XUV700',
      price: 'Rs. 13.45 - 20.99 Lakh',
      fuelType: 'Petrol',
      image: '🚙'
    }
  ]

  // Cars 20-30 Lakh
  const cars20to30 = [
    {
      id: 9,
      name: 'BMW iX xDrive50 EV',
      price: 'Rs. 20.50 - 28.50 Lakh',
      fuelType: 'EV',
      image: '🔋'
    },
    {
      id: 10,
      name: 'Mercedes GLA',
      price: 'Rs. 22.00 - 32.00 Lakh',
      fuelType: 'Petrol',
      image: '🚙'
    },
    {
      id: 11,
      name: 'Audi Q2',
      price: 'Rs. 21.00 - 29.50 Lakh',
      fuelType: 'Diesel',
      image: '🚙'
    },
    {
      id: 12,
      name: 'Jaguar XE',
      price: 'Rs. 23.00 - 31.00 Lakh',
      fuelType: 'Petrol',
      image: '🚗'
    }
  ]

  const filterButtons = [
    { id: 'petrol', label: 'Petrol Car' },
    { id: 'ev', label: 'EV Car' },
    { id: 'diesel', label: 'Diesel Car' }
  ]

  const budgetFilters = [
    { id: '10-20', label: '10 - 20 Lakh' },
    { id: '20-30', label: '20 - 30 Lakh' },
    { id: 'luxury', label: 'Luxury Cars' }
  ]

  const filterCarsByFuelType = (cars, fuelType) => {
    if (fuelType === 'petrol') return cars.filter(car => car.fuelType === 'Petrol')
    if (fuelType === 'ev') return cars.filter(car => car.fuelType === 'EV')
    if (fuelType === 'diesel') return cars.filter(car => car.fuelType === 'Diesel')
    return cars
  }

  const CarCard = ({ car }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden border border-gray-200">
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
        {car.label && (
          <div className="absolute top-3 left-3 bg-orange-400 text-white px-3 py-1 rounded text-sm font-semibold">
            {car.label}
          </div>
        )}
        {car.image}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{car.name}</h3>
        <p className="text-lg font-semibold text-gray-600 mb-3">{car.price}</p>
        {car.description && (
          <p className="text-gray-600 text-sm mb-4">{car.description}</p>
        )}
        <button className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center gap-2">
          View Price Breakup <span>→</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Popular Cars By Budget</h1>
        </div>
      </div>

      {/* Cars Under 10 Lakh Section */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-orange-400 rounded"></span>
            Cars Under 10 Lakh
          </h2>

          {/* Filter Buttons */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFuelType(btn.id)}
                className={`px-6 py-2 rounded-full border-2 font-semibold transition whitespace-nowrap ${
                  activeFuelType === btn.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 text-gray-700 hover:border-blue-500'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterCarsByFuelType(carsUnder10, activeFuelType).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>

        {/* Cars Above 10 Lakh Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-orange-400 rounded"></span>
            Cars Above 10 Lakh
          </h2>

          {/* Budget Filter Tabs */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {budgetFilters.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveBudget(btn.id)}
                className={`px-6 py-2 rounded-full border-2 font-semibold transition whitespace-nowrap ${
                  activeBudget === btn.id
                    ? 'bg-teal-500 text-white border-teal-500'
                    : 'border-gray-300 text-gray-700 hover:border-teal-500'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeBudget === '10-20' && filterCarsByFuelType(cars10to20, activeFuelType).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
            {activeBudget === '20-30' && filterCarsByFuelType(cars20to30, activeFuelType).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCars
