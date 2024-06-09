import React from 'react'
import { RiSearchLine } from "react-icons/ri";
export default function Search() {
return (
<form className="flex items-center justify-between px-4 py-2 border border-gray-400 rounded w-full md:w-5/12 overflow-hidden flex-grow">
    <input type="text" className="border-none outline-none text-2xs md:text-xs flex-grow" placeholder="جستجو"/>
    <button className="search__btn">
        <RiSearchLine className="w-4 h-4 md:w-6 md:h-6"/>
    </button>
</form>
)
}