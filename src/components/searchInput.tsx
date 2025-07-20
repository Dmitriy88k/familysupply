import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import type { SearchInputProps } from "../type";

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch(inputValue.trim());
    }, 300); 

    return () => clearTimeout(delayDebounce);
  }, [inputValue, onSearch]);

  return (
    <div className="w-[70%] md:w-[92%] mx-auto my-5">
      <div className="flex items-center border border-gray-300 rounded-full shadow-sm bg-white overflow-hidden max-w-xl">
        
        <input
          type="text"
          placeholder="Search products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow px-5 py-3 text-gray-800 focus:outline-none"
        />

        
        <div className="h-6 w-px bg-gray-300" />

        
        <div
          className="w-12 h-full flex items-center justify-center text-gray-400"
          aria-label="Search"
        >
          <FiSearch size={20} />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
