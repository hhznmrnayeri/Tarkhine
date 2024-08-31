import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
export default function OrderItem(props) {
  const deleteBasketItem = (id) => {
    props.onDelete(id);
  };
  const [starCount] = useState(props.foodItem[0].star);
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
    <div
      dir="rtl"
      className="flex items-center md:border md:border-gray-400 rounded"
    >
      {/* food img */}
      <img
        src={props.foodItem[0].img}
        alt="food"
        className="hidden md:block w-44 h-full"
      />
      {/* food content */}
      <div className="p-2 md:py-4 md:px-4 w-full h-full overflow-hidden bg-gray-100 md:bg-white flex items-start justify-between flex-col md:flex-row xl:gap-5">
        {/* right box */}
        <div className="flex md:flex-col items-start justify-between gap-1 w-full h-full flex-grow ">
          {/* food name */}
          <h4 className="text-xs md:text-2xl md:font-estedadSemiBold">
            {props.foodItem[0].title}
          </h4>
          {/* food resepi */}
          <p className="md:text-sm hidden md:block">
            {props.foodItem[0].resepi}
          </p>
          {/* bottom wrapper */}
          <div className="flex items-center gap-6">
            {/* star wrapper */}
            <div className=" items-center hidden md:flex">
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
            {/* count wrapper */}
            <div className="flex items-center gap-2 px-1 bg-tint-100 rounded text-primary md:text-xl">
              {/* plus btn */}
              <button className="font-estedadBold">+</button>
              {/* count food */}
              <span className="count__food text-sm">{props.count}</span>
              {/* minus btn */}
              <button className="minus__btn">
                {props.count === 1 ? (
                  <IoTrashOutline className="w-4 h-4" />
                ) : (
                  <span className="font-estedadBold">-</span>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* left box */}
        <div className="flex flex-col items-end gap-8 h-full justify-between">
          {/* trash btn */}
          <button
            className="trash__btn hidden md:block"
            onClick={() => deleteBasketItem(props.id)}
          >
            <IoTrashOutline className="w-6 h-6" />
          </button>
          {/* price content */}
          <div className="flex flex-col gap-1">
            {/* offer wrapper */}
            <div className=" items-center gap-2 justify-end hidden md:flex">
              {/* main price */}
              <h5 className="line-through text-gray-500">
                {props.foodItem[0].offerPrice}
              </h5>
              {/* offer count */}
              {props.foodItem[0].offerCount ? (
                <h6 className="text-error text-2xs bg-error-200 rounded-lg px-1.5">
                  {props.foodItem[0].offerCount} %
                </h6>
              ) : null}
            </div>
            {/* offer price */}
            <h5 className="text-gray-700 text-2xs md:text-gray-800 md:text-lg">
              <span className="md:text-2xl">
                {props.foodItem[0].priceValue}
              </span>
              تومان
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
