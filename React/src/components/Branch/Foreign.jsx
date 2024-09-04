import React from "react";
import SlideItem from "./SlideItem";
import SectionTitle from "./SectionTitle";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AddToBasket from "../share/AddToBasket";
export default function Foreign({ foreignArray }) {
  const addToBasket = (id) => {
    AddToBasket(id);
  };
  return (
    <section className="mt-6 md:mt-12 mb-6 md:mb-12">
      <div className="container">
        <SectionTitle title="غذاهای غیر ایرانی" />
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
            className="special"
          >
            {foreignArray.map((item) => (
              <SwiperSlide key={item.id}>
                <SlideItem {...item.foods[0]} onPlus={addToBasket} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="next__btn--swiper1 absolute top-64 -left-5 bg-white w-10 h-10 m-auto z-10 hidden lg:flex p-1 rounded-lg border border-gray-400 text-gray-600">
            <GoChevronLeft className="w-8 h-8" />
          </button>
          <button className="prev__btn--swiper1 absolute top-64 -right-5 bg-white w-10 h-10 m-auto z-10 hidden lg:flex p-1 rounded-lg border border-gray-400 text-gray-600">
            <GoChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
