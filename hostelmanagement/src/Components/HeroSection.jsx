import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center text-white p-8 md:p-10 container mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-xl overflow-hidden p-4">
          <img
            src="image-1.jpg"
            alt="cl"
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 rounded-3xl"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-md text-center md:text-left mx-auto md:ml-10">
          <h2 className="text-3xl md:text-4xl font-bold">Stay Hostel</h2>
          <p className="mt-2 text-sm md:text-base">
            Experience a good social atmosphere and meet fellow travelers
          </p>
          <button className="mt-4 px-6 py-2 bg-[#69205D] text-white rounded hover:bg-[#4e1843] transition">
            Schedule Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
