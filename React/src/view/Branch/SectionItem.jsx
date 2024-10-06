import React from "react";
import SlideItem from "./SlideItem";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowLeftIcon from "../../assets/svg/ArrowLeftIcon";
import ArrowRightIcon from "../../assets/svg/ArrowRightIcon";
export default function SectionItem({
  array,
  label,
  onPlus,
  onLike,
  onDisLike,
}) {
  const addToBasket = (id) => {
    onPlus(id);
  };
  const addFavorite = (id) => {
    onLike(id);
  };
  const removeFavorite = (id) => {
    onDisLike(id);
  };
  return (
    <section
      className={`mt-6  mb-6  ${label === "popular" ? "bg-primary" : ""} py-6`}
    >
      <div className="container">
        {label === "special" && <SectionTitle title="پیشنهاد ویژه" />}
        {label === "popular" && (
          <SectionTitle title="غذاهای محبوب" color="text-white" />
        )}
        {label === "foreign" && <SectionTitle title="غذاهای غیر ایرانی" />}
        {/* swiper */}
        <div className="mt-3 md:mt-6 relative">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={16}
            navigation={{
              nextEl: ".next__btn--swiper1",
              prevEl: ".prev__btn--swiper1",
            }}
            breakpoints={{
              350: {
                slidesPerView: 1.4,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1.9,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4.3,
                spaceBetween: 24,
              },
            }}
            modules={[Navigation]}
            className=""
          >
            {array.map((item) => (
              <SwiperSlide key={`${label}-${item.id}`}>
                <SlideItem
                  {...item}
                  onPlus={addToBasket}
                  onLike={addFavorite}
                  onDisLike={removeFavorite}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="next__btn--swiper1 absolute top-64 -left-5 bg-white w-10 h-10 m-auto z-10 hidden lg:flex p-1 rounded-lg border border-gray-400 text-gray-600">
            <ArrowLeftIcon size="w-8 h-8" />
          </button>
          <button className="prev__btn--swiper1 absolute top-64 -right-5 bg-white w-10 h-10 m-auto z-10 hidden lg:flex p-1 rounded-lg border border-gray-400 text-gray-600">
            <ArrowRightIcon size="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
