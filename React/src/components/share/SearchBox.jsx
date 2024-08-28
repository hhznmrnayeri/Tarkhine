import React from "react";
import { RiSearchLine } from "react-icons/ri";
export default function SearchBox() {
  return (
    <div className="container">
      {/* search bar */}
      <form className="mt-4 flex items-center justify-between px-4 py-2 border border-gray-400 rounded md:hidden ">
        {/* search input */}
        <input
          type="text"
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
