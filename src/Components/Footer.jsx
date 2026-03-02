import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-black/80 mt-auto py-6 shadow-md">
      <div className="flex justify-between items-center px-5">
        <div className="text-white font-bold text-lg">
          CarHub
        </div>
        <div className="text-white text-sm">
          <p>&copy; 2026 CarHub. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-white">
          <a href="#" className="hover:underline transition">Privacy</a>
          <a href="#" className="hover:underline transition">Terms</a>
          <a href="#" className="hover:underline transition">Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
