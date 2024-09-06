import React, { useId } from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import ConvertToPersian from "./../share/ConvertToPersian";
import Rating from "../share/Rating";
export default function FavoriteItem(props) {
  const addItemToBasket = (id) => {
    props.onPlus(id);
  };
  const removeFavorite = (id) => {
    props.onDisLike(id);
  };
  return (
    <div className="col-span-6 md:col-span-12 lg:col-span-6 xl:col-span-4 flex flex-col overflow-hidden rounded md:rounded-lg border border-gray-400">
      {/* img */}
      <img
        src={props.img}
        alt="food"
        className="w-full rounded md:rounded-lg h-72"
      />
      {/* favorite content */}
      <div className="p-2 md:p-4">
        {/* top wrapper */}
        <div className="flex items-center justify-between">
          {/* favorite title */}
          <h4 className="text-xs md:text-xl md:font-estedadSemiBold">
            {props.title}
          </h4>
          {/* heart btn */}
          {props.isFavorite ? (
            <button className="" onClick={() => removeFavorite(props.id)}>
              <IoMdHeart className="w-4 h-4 md:w-6 md:h-6 text-error" />
            </button>
          ) : null}
        </div>
        {/* center wrapper */}
        <div className="flex items-center justify-between mt-1 md:mt-2">
          <div className="hidden md:flex items-center text-[#F4B740] child:w-4 child:h-4 child:md:w-6 child:md:h-6">
            {Array(5 - props.star)
              .fill(0)
              .map((_i, index) => (
                <IoMdStarOutline key={index + 1} />
              ))}
            {Array(props.star)
              .fill(0)
              .map((_i, index) => (
                <IoMdStar key={index + 1} />
              ))}
          </div>
          {/* mobile star */}
          <div className="flex md:hidden items-center gap-0.5 text-xs">
            {/* star */}
            <IoMdStar className={`w-4 h-4 md:w-6 md:h-6 text-[#F4B740]`} />
            {/* star count */}
            <span>{ConvertToPersian(props.star)}</span>
          </div>
          {/* price wrapper */}
          <span className="text-xs md:text-base">
            {ConvertToPersian(props.priceValue)} تومان
          </span>
        </div>
        {/* btn */}
        <button
          className="text-2xs text-white bg-primary md:font-estedadMedium md:text-base rounded p-2 md:px-4 w-full h-10 mt-2 md:mt-6"
          onClick={() => addItemToBasket(props.id)}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
