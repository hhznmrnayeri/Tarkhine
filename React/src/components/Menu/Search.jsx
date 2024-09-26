import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    if (searchValue) {
      navigate(`/search/${searchValue}`);
    }
  }
  return (
    <form
      className="flex items-center justify-between px-4 py-2 border border-gray-400 rounded w-full md:w-5/12 overflow-hidden flex-grow"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="border-none outline-none text-2xs md:text-xs flex-grow"
        placeholder="جستجو"
      />
      <button className="search__btn">
        <RiSearchLine className="w-4 h-4 md:w-6 md:h-6" />
      </button>
    </form>
  );
}
