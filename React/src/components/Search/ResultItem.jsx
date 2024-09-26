import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import ConvertToPersian from "../../hooks/ConvertToPersian";
export default function ResultItem(props) {
  const addItemToBasket = (id) => {
    props.onPlus(id);
  };
  const addFavorite = (id) => {
    props.onLike(id);
  };
  const removeFavorite = (id) => {
    props.onDisLike(id);
  };
  return (
    <div className="col-span-1 sm:col-span-6 xl:col-span-3 flex flex-col rounded md:rounded-lg border border-gray-400 overflow-hidden">
      {/* result img */}
      <img
        src={`../${props.img[0]}`}
        alt="result"
        className="result__img object-cover w-full h-72"
      />
      {/* result content */}
      <div className="bg-white p-4 flex-center flex-col gap-4">
        {/* result name */}
        <h2 className="result__name text-xs md:text-xl font-estedadSemiBold">
          {props.title}
        </h2>
        {/* result content wrapper */}
        <div className="flex items-start justify-between w-full">
          {/* right box */}
          <div className="flex flex-col items-start gap-1 text-2xs text-gray-500">
            {/* top box */}
            <div className="flex items-center gap-1">
              {/* add favorite */}
              {props.isFavorite ? (
                <button
                  className="add__favorite"
                  onClick={() => removeFavorite(props.id)}
                >
                  <IoMdHeart className="w-4 h-4 text-error" />
                </button>
              ) : (
                <button
                  className="flex items-center gap-1"
                  onClick={() => addFavorite(props.id)}
                >
                  <IoMdHeartEmpty className="w-4 h-4" />
                  <span>افزودن به علاقمندی‌ها</span>
                </button>
              )}
              {/* text favorite */}
            </div>
            {/* bottom box */}
            <div className="flex items-center gap-1">
              {/* star */}
              <IoMdStar className="w-4 h-4 text-[#F4B740]" />
              {/* rate number */}
              <span className="rate__number text-2xs md:text-sm text-gray-800 font-estedadMedium">
                {props.star}
              </span>
              {/* points */}
              <span>
                (<span className="points">{props.comment}</span> امتیاز)
              </span>
            </div>
          </div>
          {/* left box */}
          <div className="flex flex-col items-end gap-1">
            {/* top box */}
            <div className="flex items-center gap-2 text-2xs">
              {props.offerPrice && (
                <span className="main__price text-gray-500 line-through">
                  {ConvertToPersian(props.offerPrice)}
                </span>
              )}
              {/* count offer */}
              <span
                className={`${
                  props.offerCount
                    ? "count__offer text-error px-1.5 rounded-lg bg-error-200"
                    : ""
                }`}
              >
                {props.offerCount
                  ? `% ${ConvertToPersian(props.offerCount)}`
                  : ""}
              </span>
            </div>
            {/* offer price */}
            <span className="text-2xs md:text-base">
              <span className="offer__price">
                {ConvertToPersian(props.priceValue)}{" "}
              </span>
              تومان
            </span>
          </div>
        </div>
        {/* btn result */}
        <button
          className="text-2xs md:text-base md:font-estedadMedium text-white px-4 py-2 w-full bg-primary flex-center rounded"
          onClick={() => addItemToBasket(props.id)}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
