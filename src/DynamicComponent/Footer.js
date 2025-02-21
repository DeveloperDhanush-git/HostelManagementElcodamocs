import React from 'react'
import {Facebook,Twitter,Instagram,Linkedin} from 'lucide-react'

const Footer = () => {
  return (
    <div>
        
      {/* Footer Section */}
<div className="container mx-auto p-6 w-full flex flex-col items-center">
  {/* Top Buttons */}
  <div className="flex gap-4 mb-6">
    {["List your Hostels", "Log In", "Sign Up", "Help", "Privacy & Terms"].map((label, index) => (
      <button
        key={index}
        className="px-4 py-2 bg-white border border-transparent hover:border-black rounded transition-all"
      >
        {label}
      </button>
    ))}
  </div>

  {/* Centered Privacy & Terms */}
  <div className="flex flex-col items-center mb-6">
    <button className="px-4 py-2 mt-2 bg-white border border-transparent hover:border-black rounded transition-all">
      Terms
    </button>
  </div>

  {/* Social Media Icons */}
  <div className="flex gap-6">
    <Facebook size={24} className="cursor-pointer hover:text-gray-600" />
    <Twitter size={24} className="cursor-pointer hover:text-gray-600" />
    <Instagram size={24} className="cursor-pointer hover:text-gray-600" />
    <Linkedin size={24} className="cursor-pointer hover:text-gray-600" />
  </div>
</div>


      
      <footer className="p-4 mt-4 bg-gray-100 text-center text-gray-600">
        <p>&copy; 2025 Stay Hostel. All rights reserved.</p>
      </footer>
    </div>

  )
}

export default Footer