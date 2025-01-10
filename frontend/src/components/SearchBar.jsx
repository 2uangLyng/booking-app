import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexBetween pl-6 h-[3.3rem] bg-white max-w-[366px] rounded-full ring-1 ring-slate-900/5">
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search..."
        className="bg-transparent border-none outline-none w-full"
      />
      <FaLocationDot className="relative right-4 text-xl hover:text-[#65b800] cursor-pointer" />
    </div>
  )
}

export default SearchBar