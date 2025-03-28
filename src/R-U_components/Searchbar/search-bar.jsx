import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); 
  };
 

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 w-full max-w-md mb-11">      
        <div className="mt-5 relative w-[80%]">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            className="w-full px-8 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
          />
          <CiSearch
            className="absolute text-[#00405A] top-3 left-1 "
            size={20}
          />
        </div>
      
    </div>
  );
};

export default SearchBar;
