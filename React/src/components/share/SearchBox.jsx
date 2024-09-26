import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export default function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    if (searchValue) {
      navigate(`/search/${searchValue}`);
    }
  }
  return (
    <div className="container">
      {/* search bar */}
      <form
        className="mt-4 flex items-center justify-between px-4 py-2 border border-gray-400 rounded md:hidden"
        onSubmit={handleSearch}
      >
        {/* search input */}
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="border-none outline-none text-2xs flex-grow"
          placeholder="جستجو"
        />
        {/* search btn */}
        <button className="mobile__search--btn">
          <RiSearchLine className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
