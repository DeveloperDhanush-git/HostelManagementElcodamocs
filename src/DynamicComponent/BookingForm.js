import React, { useState } from "react";

const BookingForm = () => {
  const [roomType, setRoomType] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [amenities, setAmenities] = useState({
    ac: false,
    geyser: false,
    parking: false,
    food: false,
    security: false,
  });
  const [isToggled, setIsToggled] = useState(false);

  const toggleAmenity = (key) => {
    setAmenities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col items-start p-6 min-h-screen w-full max-w-3xl mx-auto">
      <div className="mt-6 w-full">
        <label className="block font-semibold">Room Type</label>
        <select
          className="w-full md:w-[70px] p-2 border rounded mt-2"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
        </select>

        <label className="block font-semibold mt-4">Number of People</label>
        <input
          type="number"
          className="w-full md:w-[70px] p-2 border rounded mt-2"
          placeholder="Enter number of people"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />

        <h2 className="font-semibold mt-6">Amenities</h2>
        <p className="text-sm text-gray-500">Select the amenities you need</p>
        {Object.keys(amenities).map((key) => (
          <div key={key} className="flex justify-between items-center mt-2">
            <div>
              <span className="capitalize font-medium flex">{key}</span>
              <p className="text-xs text-gray-500">
                {key === "geyser"
                  ? "Additional information about Geyser."
                  : key === "parking"
                  ? "Available spots: 10"
                  : key === "food"
                  ? "Delicious meals available"
                  : key === "security"
                  ? "Manage your security settings"
                  : "Default sub text"}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={amenities[key]}
                onChange={() => toggleAmenity(key)}
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>

      <div className="flex justify-end w-full mt-6">
        <button
          className={`px-6 py-2 text-white text-sm font-semibold transition-all rounded ${
            isToggled ? "bg-green-600" : "bg-[#69205D]"
          }`}
          onClick={() => setIsToggled(!isToggled)}
        >
          {isToggled ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
