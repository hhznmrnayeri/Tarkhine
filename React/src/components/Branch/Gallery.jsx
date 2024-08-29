import React from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
export default function Gallery({ listAlbum }) {
  return (
    <section className="mt-6 md:mt-12">
      <SectionTitle title="شعبه اکباتان" center="true" />
      <h2 className="text-center font-estedadBold md:text-2xl"></h2>
      <Swiper
        navigation={{
          nextEl: ".next__btn--swiper4",
          prevEl: ".prev__btn--swiper4",
        }}
        modules={[Navigation]}
        className="h-44 md:h-80 relative mt-3 md:mt-5"
      >
        {listAlbum.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`bg-${item.className} w-full h-full bg-center object-cover bg-cover`}
          ></SwiperSlide>
        ))}
        <button className="next__btn--swiper4 absolute z-10 w-6 h-6 md:w-12 md:h-12 top-0 bottom-0 m-auto left-3 md:left-6 text-white">
          <GoChevronLeft className="w-6 h-6 md:w-12 md:h-12" />
        </button>
        <button className="prev__btn--swiper4 absolute z-10 w-6 h-6 md:w-12 md:h-12 top-0 bottom-0 m-auto right-3 md:right-6 text-white">
          <GoChevronRight className="w-6 h-6 md:w-12 md:h-12" />
        </button>
      </Swiper>
    </section>
  );
}
