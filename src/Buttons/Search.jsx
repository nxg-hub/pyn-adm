import React from "react";

function SearchBar({ placeholder }) {
  return (
    <div className="search-container">
      {/* Search Input */}
      <div className="search-inputs">
        <input 
          type="text" 
          placeholder={placeholder} 
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      </div>
    </div>
  );
}

export default SearchBar;
