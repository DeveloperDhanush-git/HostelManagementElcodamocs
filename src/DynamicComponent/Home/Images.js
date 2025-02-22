import React from "react";
import { useNavigate } from "react-router-dom"; 

const Images = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full container mx-auto p-4">
      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large Image */}
        <div
          className="md:col-span-1 h-[418px] md:h-[518px] cursor-pointer"  
          onClick={() => navigate("/explore")} 
        >
          <img
            src="image-2.jpg"
            alt="Hostel"
            className="w-full h-full object-cover"/>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 grid gap-4 cursor-pointer"  onClick={() => navigate("/explore")}>
          {/* Top Row Image */}
          <img
            src="image-3.jpg"
            alt="Hostel"
            className="w-full h-[200px] md:h-[250px] object-cover"
          />

          {/* Bottom Two Images */}
          <div className="grid grid-cols-2 gap-4 cursor-pointer" onClick={() => navigate("/explore")}>
            <img
              src="image-4.jpg"
              alt="Hostel"
              className="w-full h-[150px] md:h-[250px] object-cover "
            />
            <img
              src="image-5.jpg"
              alt="Hostel"
              className="w-full h-[150px] md:h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Images;