import React from "react";
import SlideItem from "./SlideItem";
import SectionTitle from "./SectionTitle";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function Special() {
  return (
    <section className="mt-6 md:mt-12 mb-6 md:mb-12">
      <div className="container">
        <SectionTitle title="پیشنهاد ویژه" />
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
            <SwiperSlide>
              <SlideItem
                img="src/assets/images/menu/food7.webp"
                title="دلمه برگ کلم"
                star="۳"
                points="۴۰"
                price="۲۲۰٬۰۰۰"
                discount="۸"
                offer="۲۰۹٬۰۰۰"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem
                img="src/assets/images/menu/food6.webp"
                title="بادمجان شکم‌پر"
                star="۵"
                points="۵۲"
                price="۱۵۰٬۰۰۰"
                discount="۱۸"
                offer="۱۳۶٬۰۰۰"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem
                img="src/assets/images/menu/food17.webp"
                title="کالزونه اسفناج"
                star="۵"
                points="۶۲"
                price="۱۹۰٬۰۰۰"
                discount="۱۷"
                offer="۱۷۷٬۰۰۰"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem
                img="src/assets/images/menu/food22.webp"
                title="پیتزا قارچ"
                star="۳"
                points="۳۳"
                price="۲۱۵٬۰۰۰"
                discount="۲۵"
                offer="۱۷۵٬۰۰۰"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem
                img="src/assets/images/menu/food2.webp"
                title="باقلاقاتوق"
                star="۳"
                points="۴۰"
                price="۲۰۵٬۰۰۰"
                discount="۳۰"
                offer="۱۸۰٬۰۰۰"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem
                img="src/assets/images/menu/food7.webp"
                title="کوکو سبزی"
                star="۳"
                points="۴۰"
                price="۳۰۰٬۰۰۰"
                discount="۱۰"
                offer="۲۷۰٬۰۰۰"
              />
            </SwiperSlide>
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
