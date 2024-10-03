import React from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowLeftIcon from "../../assets/svg/ArrowLeftIcon";
import ArrowRightIcon from "../../assets/svg/ArrowRightIcon";
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
        <div className="bg-slide__gallery1 bg"></div>
        <div className="bg-slide__gallery2 bg"></div>
        <div className="bg-slide__gallery3 bg"></div>
        <div className="bg-slide__gallery4 bg"></div>
        <div className="bg-slide__gallery5 bg"></div>
        <div className="bg-slide__gallery6 bg"></div>
        <div className="bg-slide__gallery7 bg"></div>
        <div className="bg-slide__gallery8 bg"></div>
        <div className="bg-slide__gallery9 bg"></div>
        <div className="bg-slide__gallery10 bg"></div>
        <div className="bg-slide__gallery11 bg"></div>
        <div className="bg-slide__gallery12 bg"></div>
        <div className="bg-slide__gallery13 bg"></div>
        <div className="bg-slide__gallery14 bg"></div>
        <div className="bg-slide__gallery15 bg"></div>
        <div className="bg-slide__gallery16 bg"></div>
        <div className="bg-slide__gallery17 bg"></div>
        <div className="bg-slide__gallery18 bg"></div>
        <div className="bg-slide__gallery19 bg"></div>
        <div className="bg-slide__gallery20 bg"></div>
        <div className="bg-slide__gallery21 bg"></div>
        <div className="bg-slide__gallery22 bg"></div>
        <div className="bg-slide__gallery23 bg"></div>
        <div className="bg-slide__gallery24 bg"></div>
        <div className="bg-slide__gallery25 bg"></div>
        <div className="bg-slide__gallery26 bg"></div>
        <div className="bg-slide__gallery27 bg"></div>
        <div className="bg-slide__gallery28 bg"></div>
        <div className="bg-slide__gallery29 bg"></div>
        <div className="bg-slide__gallery30 bg"></div>
        <div className="bg-slide__gallery31 bg"></div>

        {listAlbum.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`${item.className} w-full h-full bg-center object-cover bg-cover`}
          ></SwiperSlide>
        ))}
        <button className="next__btn--swiper4 absolute z-10 w-6 h-6 md:w-12 md:h-12 top-0 bottom-0 m-auto left-3 md:left-6 text-white">
          <ArrowLeftIcon size="w-6 h-6 md:w-12 md:h-12" />
        </button>
        <button className="prev__btn--swiper4 absolute z-10 w-6 h-6 md:w-12 md:h-12 top-0 bottom-0 m-auto right-3 md:right-6 text-white">
          <ArrowRightIcon size="w-6 h-6 md:w-12 md:h-12" />
        </button>
      </Swiper>
    </section>
  );
}
