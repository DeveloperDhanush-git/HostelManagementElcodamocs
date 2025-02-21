import React from 'react';
import { Wifi, Utensils, WashingMachine, Coffee, ParkingCircle } from 'lucide-react';

const Amenities = () => {
  return (
    <div>
      {/* Amenities Section */}
      <div className="container mx-auto p-4 w-full mt-3">
        <h3 className="text-2xl font-bold text-left mb-4">Amenities</h3>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { icon: <Wifi size={24} />, label: "Free\nWiFi" },
            { icon: <Utensils size={24} />, label: "Kitchen\nUtensils" },
            { icon: <WashingMachine size={24} />, label: "Laundry\nfacilities" },
            { icon: <Coffee size={24} />, label: "Coffee\nTea" },
            { icon: <ParkingCircle size={24} />, label: "Paid\nParking" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center border border-black p-4 rounded gap-4"
            >
              {item.icon}
              <span className="block text-center mt-2 whitespace-pre">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
