import React from "react";
import ConvertToPersian from "../../hooks/ConvertToPersian";
import StarIcon from "../../assets/svg/StarIcon";
import HeartIcon from "../../assets/svg/HeartIcon";
import HeartFavoriteIcon from "../../assets/svg/HeartFavoriteIcon";
export default function SlideItem(props) {
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
    <div className="flex flex-col rounded md:rounded-lg border overflow-hidden border-gray-400">
      {/* result img */}
      <img
        src={props.img}
        alt="food"
        className="food__img object-cover w-full h-60 md:h-72"
      />
      {/* result content */}
      <div className="bg-white p-4 flex-center flex-col gap-4">
        {/* result name */}
        <h2 className="food__name text-xs md:text-xl font-estedadSemiBold">
          {props.title}
        </h2>
        {/* result content wrapper */}
        <div className="flex items-start justify-between w-full h-11">
          {/* right box */}
          <div className="flex flex-col items-start gap-1 text-2xs text-gray-500">
            {/* top box */}
            {props.isFavorite ? (
              <button className="" onClick={() => removeFavorite(props.id)}>
                <HeartIcon size="w-4 h-4 text-error-100" />
              </button>
            ) : (
              <div className="flex items-center gap-1">
                {/* add favorite */}
                <button className="" onClick={() => addFavorite(props.id)}>
                  <HeartFavoriteIcon size="w-4 h-4" />
                </button>
                {/* text favorite */}
                <span className="hidden md:block">افزودن به علاقمندی‌ها</span>
              </div>
            )}
            {/* bottom box */}
            <div className="flex items-center gap-1">
              {/* star */}
              <StarIcon size="w-4 h-4" />
              {/* rate number */}
              <span className="rate__number text-2xs md:text-sm text-gray-800 font-estedadMedium">
                {ConvertToPersian(props.star)}
              </span>
              {/* points */}
              <span className="hidden md:flex">
                ({ConvertToPersian(props.comment)} امتیاز)
              </span>
            </div>
          </div>
          {/* left box */}
          <div className="flex flex-col items-end gap-1">
            {/* top box */}
            <div className="flex items-center gap-2 text-2xs">
              {/* main price */}
              {props.offerPrice ? (
                <span className="main__price text-gray-500 line-through">
                  {ConvertToPersian(props.offerPrice)}
                </span>
              ) : null}
              {/* count offer */}
              {props.offerCount ? (
                <span
                  className={`${
                    props.offerCount
                      ? "count__offer text-error px-1.5 rounded-lg bg-error-200"
                      : ""
                  }`}
                >
                  % {ConvertToPersian(props.offerCount)}
                </span>
              ) : null}
            </div>
            {/* offer price */}
            <span className="text-2xs md:text-base">
              {ConvertToPersian(props.priceValue)} تومان
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
