import React from "react";

const HostelCard = ({ hostel }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden font-[Montserrat]">
      <img src={hostel.image} alt={hostel.name} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="text-[20px] font-semibold">{hostel.name}</h3>
        <p className="text-gray-600">{hostel.price}/night</p>
      </div>
    </div>
  );
};

export default HostelCard;
