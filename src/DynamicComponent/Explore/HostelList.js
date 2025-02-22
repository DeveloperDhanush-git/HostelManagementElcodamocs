import React, { useState } from "react";
import SearchBar from "./SearchBar";
import HostelCard from "./HostelCard";

const HostelList = () => {
  const initialHostels = [
    { id: 1, name: "Tiger Hostel", price: "$20", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&q=80" },
    { id: 2, name: "Sailor Hostel", price: "$25", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&q=80" },
    { id: 3, name: "Lighthouse Hostel", price: "$30", image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=400&h=300&q=80" },
    { id: 4, name: "Palm Tree Hostel", price: "$18", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&q=80" },
    { id: 5, name: "Sunset Hostel", price: "$35", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&q=80" },
    { id: 6, name: "Mountain View Hostel", price: "$22", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&q=80" },
    { id: 7, name: "Riverfront Hostel", price: "$28", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&q=80" },
    { id: 8, name: "Urban Art Hostel", price: "$27", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&q=80" },
    { id: 9, name: "Rustic Cabin Hostel", price: "$21", image: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=400&h=300&q=80" },
    { id: 10, name: "Beach Bungalow Hostel", price: "$33", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&q=80" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredHostels = initialHostels.filter(hostel =>
    hostel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-[20px] font-bold mb-4">Explore Hostels</h2>

      {/* Search Bar Component */}
      <SearchBar onSearch={setSearchTerm} />

      {/* Hostel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredHostels.length > 0 ? (
          filteredHostels.map((hostel) => <HostelCard key={hostel.id} hostel={hostel} />)
        ) : (
          <p className="text-gray-500">No hostels found.</p>
        )}
      </div>
    </div>
  );
};

export default HostelList;