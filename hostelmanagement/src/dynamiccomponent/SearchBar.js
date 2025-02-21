import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Pass the search term to parent (HostelList)
  };

  return (
    <div className="mb-4 font-montserrat">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Where are you going?"
        className="w-full p-3 bg-gray-100 rounded-lg shadow-sm " 
      />
    </div>
  );
};

export default SearchBar;
