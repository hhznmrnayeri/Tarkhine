import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper/modules";
export default function Type() {
  return (
    <Swiper
      slidesPerView={"auto"}
      rewind={true}
      spaceBetween={8}
      freeMode={true}
      modules={[FreeMode]}
      className="w-full h-full"
    >
      <SwiperSlide className="w-auto flex-center">
        <button className="text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1">
          <span>غذاهای ایرانی</span>
          <GoChevronLeft className="w-3 md:w-4 h-3 md:h-4" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-auto flex-center">
        <button className="text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1">
          <span>غذاهای غیر ایرانی</span>
          <GoChevronLeft className="w-3 md:w-4 h-3 md:h-4" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-auto flex-center">
        <button className="text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1">
          <span>پیتزاها</span>
          <GoChevronLeft className="w-3 md:w-4 h-3 md:h-4" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-auto flex-center">
        <button className="text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1">
          <span>ساندویچ‌ها</span>
          <GoChevronLeft className="w-3 md:w-4 h-3 md:h-4" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-auto flex-center">
        <button className="text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1">
          <span>پرفروش‌ترین</span>
          <GoChevronLeft className="w-3 md:w-4 h-3 md:h-4" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-auto flex-center">
        <button className="text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1">
          <span>اقتصادی‌ترین</span>
          <GoChevronLeft className="w-3 md:w-4 h-3 md:h-4" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-auto flex-center">
        <button className="text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1">
          <span>اقتصادی‌ترین</span>
          <GoChevronLeft className="w-3 md:w-4 h-3 md:h-4" />
        </button>
      </SwiperSlide>
    </Swiper>
  );
}
