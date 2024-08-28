import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
export default function FavoriteItem(props) {
  const [starCount] = useState(props.star);
  let emptyStar = 5 - starCount;
  let emptyArray = Array(+emptyStar);
  let fillArray = Array(+starCount);
  for (let i = 0; i < emptyStar; i++) {
    emptyArray.push("empty");
  }
  for (let i = 0; i < starCount; i++) {
    fillArray.push("fill");
  }
  return (
    <div className="col-span-6 md:col-span-12 lg:col-span-6 xl:col-span-4 flex flex-col overflow-hidden rounded md:rounded-lg border border-gray-400">
      {/* img */}
      <img
        src={props.img}
        alt="food"
        className="w-full rounded md:rounded-lg"
      />
      {/* favorite content */}
      <div className="p-2 md:p-4">
        {/* top wrapper */}
        <div className="flex items-center justify-between">
          {/* favorite title */}
          <h4 className="text-xs md:text-xl md:font-estedadSemiBold">
            {props.name}
          </h4>
          {/* heart btn */}
          <button className="text-error">
            <FaHeart className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
        {/* center wrapper */}
        <div className="flex items-center justify-between mt-1 md:mt-2">
          {/* desktop star */}
          <div className="hidden md:flex items-center">
            {emptyArray.map((item, index) => (
              <IoMdStarOutline
                key={index}
                className={`w-4 h-4 md:w-6 md:h-6 ${item} text-[#F4B740]`}
              />
            ))}
            {fillArray.map((item, index) => (
              <IoMdStar
                key={index}
                className={`w-4 h-4 md:w-6 md:h-6 ${item} text-[#F4B740]`}
              />
            ))}
          </div>
          {/* mobile star */}
          <div className="flex md:hidden items-center gap-0.5 text-xs">
            {/* star */}
            <IoMdStar className={`w-4 h-4 md:w-6 md:h-6 text-[#F4B740]`} />
            {/* star count */}
            <span>۴</span>
          </div>
          {/* price wrapper */}
          <span className="text-xs md:text-base">{props.price} تومان</span>
        </div>
        {/* btn */}
        <button className="text-2xs text-white bg-primary md:font-estedadMedium md:text-base rounded p-2 md:px-4 w-full h-10 mt-2 md:mt-6">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
