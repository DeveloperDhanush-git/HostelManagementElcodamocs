import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Stay Hostel</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border rounded">Explore</button>
          <button className="px-4 py-2 border rounded">List your hostel</button>
          <button className="px-4 py-2 bg-[#69205D] text-white rounded">
            Sign up
          </button>
          <button className="px-4 py-2 border rounded">Login</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-2 space-y-2">
          <button className="px-4 py-2 border rounded w-full">Explore</button>
          <button className="px-4 py-2 border rounded w-full">
            List your hostel
          </button>
          <button className="px-4 py-2 bg-[#69205D] text-white rounded w-full">
            Sign up
          </button>
          <button className="px-4 py-2 border rounded w-full">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
