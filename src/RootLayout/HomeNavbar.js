import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md p-4 bg-[#69205D] font-[Montserrat]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-xl font-bold flex items-center">
          🏨 <span className="ml-2 text-white text-[25px]">Hostel</span>
        </div>

        {/* Right: Menu & Profile */}
        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white text-[17px]">
            <NavLink to='/'><li className="hover:text-black cursor-pointer">Home</li></NavLink>
            <li className="hover:text-black cursor-pointer">About</li>
            <NavLink to="/explore" className="hover:text-black cursor-pointer">Explore</NavLink>

            <li className="hover:text-black cursor-pointer">Enquiry</li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          {/* User Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-4 bg-[#69205D] flex items-center justify-center">
          <ul className="text-white space-y-3 text-[17px]">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Explore</li>
            <li className="hover:text-black cursor-pointer">Wishlist</li>
            <li className="hover:text-black cursor-pointer">Your trips</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;