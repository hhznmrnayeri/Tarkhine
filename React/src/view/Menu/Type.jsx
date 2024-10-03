import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import ArrowLeftIcon from "../../assets/svg/ArrowLeftIcon";
export default function Type({ typeArray }) {
  return (
    <Swiper
      slidesPerView={"auto"}
      rewind={true}
      spaceBetween={8}
      freeMode={true}
      modules={[FreeMode]}
      className="w-full h-full"
    >
      {typeArray.map((item) => (
        <SwiperSlide key={item.id} className="w-auto flex-center">
          <button className="text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1">
            <span>{item.title}</span>
            <ArrowLeftIcon size="w-3 md:w-4 h-3 md:h-4" />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
