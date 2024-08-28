import React, { useState } from "react";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { AiOutlineExpand } from "react-icons/ai";
import { GoChevronLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import Overlay from "../share/Overlay";
import { IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
export default function Branch() {
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const openGalleryModal = () => {
    setShowGalleryModal(true);
  };
  const closeGalleryModal = () => {
    setShowGalleryModal(false);
    setThumbsSwiper(null);
  };
  return (
    <>
      <section className="mb-6 md:mb-12">
        <div className="container">
          {/* section title */}
          <h2 className="text-center font-estedadBold mt-6 md:mt-12 md:text-2xl">
            ترخینه گردی
          </h2>
          {/* branch wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 mt-3 md:mt-6">
            {/* branch item */}
            <div className="col-span-1 md:col-span-3 flex md:flex-col items-start md:items-center gap-2  border border-primary md:border-gray-400 rounded md:rounded-lg group relative overflow-hidden">
              {/* overlay */}
              <div className="md:flex md:flex-center md:bg-black/40 md:w-full md:h-36 lg:h-64 xl:h-80 md:rounded-lg absolute bottom-2 right-2 md:top-0 md:right-0 md:left-0 md:bottom-0 lg:group-hover:-translate-y-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                {/* gallery icon */}
                <button className="text-white" onClick={openGalleryModal}>
                  <TbPhotoSquareRounded className="w-14 h-14 hidden md:block" />
                  <AiOutlineExpand className="w-4 h-4 md:hidden" />
                </button>
              </div>
              {/* branch img */}
              <img
                src="src/assets/images/home/branch.webp"
                alt="branch"
                className="w-36 md:w-full object-cover"
              />
              {/* branch content */}
              <div className="flex flex-col items-center gap-1 px-3 md:-translate-y-2 md:group-hover:-translate-y-10 pb-4 pt-2 transition-all duration-300 w-full bg-white z-10 text-center">
                {/* brach title */}
                <h4 className="text-sm md:text-lg lg:text-2xl  font-estedadMedium md:font-estedadSemiBold">
                  شعبه اکباتان
                </h4>
                {/* branch caption */}
                <p className=" text-2xs text-gray-700 md:text-sm md:font-estedadMedium md:h-20 lg:h-16 xl:h-10">
                  شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                </p>
                {/* branch btn */}
                <NavLink
                  to="/branch"
                  className="flex-center gap-1 md:text-primary text-xs md:p-2 md:rounded md:border md:border-primary absolute md:h-8 md:w-32 md:left-0 md:right-0 md:mx-auto md:-bottom-8 md:group-hover:-bottom-8 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="hidden md:block">صفحه شعبه</span>
                  <GoChevronLeft className="w-4 h-4 hidden md:block" />
                </NavLink>
              </div>
            </div>
            {/* branch item */}
            <div className="col-span-1 md:col-span-3 flex md:flex-col items-start md:items-center gap-2  border border-primary md:border-gray-400 rounded md:rounded-lg group relative overflow-hidden">
              {/* overlay */}
              <div className="md:flex md:flex-center md:bg-black/40 md:w-full md:h-36 lg:h-64 xl:h-80 md:rounded-lg absolute bottom-2 right-2 md:top-0 md:right-0 md:left-0 md:bottom-0 lg:group-hover:-translate-y-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                {/* gallery icon */}
                <button className="text-white" onClick={openGalleryModal}>
                  <TbPhotoSquareRounded className="w-14 h-14 hidden md:block" />
                  <AiOutlineExpand className="w-4 h-4 md:hidden" />
                </button>
              </div>
              {/* branch img */}
              <img
                src="src/assets/images/home/branch1.webp"
                alt="branch"
                className="w-36 md:w-full object-cover"
              />
              {/* branch content */}
              <div className="flex flex-col items-center gap-1 px-3 md:-translate-y-2 md:group-hover:-translate-y-10 pb-4 pt-2 transition-all duration-300 w-full bg-white z-10 text-center">
                {/* brach title */}
                <h4 className="text-sm md:text-lg lg:text-2xl  font-estedadMedium md:font-estedadSemiBold">
                  شعبه چالوس
                </h4>
                {/* branch caption */}
                <p className=" text-2xs text-gray-700 md:text-sm md:font-estedadMedium md:h-20 lg:h-16 xl:h-10">
                  چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر
                  میلانی
                </p>
                {/* branch btn */}
                <NavLink
                  to="/branch"
                  className="flex-center gap-1 md:text-primary text-xs md:p-2 md:rounded md:border md:border-primary absolute md:h-8 md:w-32 md:left-0 md:right-0 md:mx-auto md:-bottom-8 md:group-hover:-bottom-8 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="hidden md:block">صفحه شعبه</span>
                  <GoChevronLeft className="w-4 h-4 hidden md:block" />
                </NavLink>
              </div>
            </div>
            {/* branch item */}
            <div className="col-span-1 md:col-span-3 flex md:flex-col items-start md:items-center gap-2  border border-primary md:border-gray-400 rounded md:rounded-lg group relative overflow-hidden">
              {/* overlay */}
              <div className="md:flex md:flex-center md:bg-black/40 md:w-full md:h-36 lg:h-64 xl:h-80 md:rounded-lg absolute bottom-2 right-2 md:top-0 md:right-0 md:left-0 md:bottom-0 lg:group-hover:-translate-y-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                {/* gallery icon */}
                <button className="text-white" onClick={openGalleryModal}>
                  <TbPhotoSquareRounded className="w-14 h-14 hidden md:block" />
                  <AiOutlineExpand className="w-4 h-4 md:hidden" />
                </button>
              </div>
              {/* branch img */}
              <img
                src="src/assets/images/home/branch2.webp"
                alt="branch"
                className="w-36 md:w-full object-cover"
              />
              {/* branch content */}
              <div className="flex flex-col items-center gap-1 px-3 md:-translate-y-2 md:group-hover:-translate-y-10 pb-4 pt-2 transition-all duration-300 w-full bg-white z-10 text-center">
                {/* brach title */}
                <h4 className="text-sm md:text-lg lg:text-2xl  font-estedadMedium md:font-estedadSemiBold">
                  شعبه اقدسیه
                </h4>
                {/* branch caption */}
                <p className="text-2xs text-gray-700 md:text-sm md:font-estedadMedium md:h-20 lg:h-16 xl:h-10">
                  خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
                </p>
                {/* branch btn */}
                <NavLink
                  to="/branch"
                  className="flex-center gap-1 md:text-primary text-xs md:p-2 md:rounded md:border md:border-primary absolute md:h-8 md:w-32 md:left-0 md:right-0 md:mx-auto md:-bottom-8 md:group-hover:-bottom-8 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="hidden md:block">صفحه شعبه</span>
                  <GoChevronLeft className="w-4 h-4 hidden md:block" />
                </NavLink>
              </div>
            </div>
            {/* branch item */}
            <div className="col-span-1 md:col-span-3 flex md:flex-col items-start md:items-center gap-2  border border-primary md:border-gray-400 rounded md:rounded-lg group relative overflow-hidden">
              {/* overlay */}
              <div className="md:flex md:flex-center md:bg-black/40 md:w-full md:h-36 lg:h-64 xl:h-80 md:rounded-lg absolute bottom-2 right-2 md:top-0 md:right-0 md:left-0 md:bottom-0 lg:group-hover:-translate-y-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                {/* gallery icon */}
                <button className="text-white" onClick={openGalleryModal}>
                  <TbPhotoSquareRounded className="w-14 h-14 hidden md:block" />
                  <AiOutlineExpand className="w-4 h-4 md:hidden" />
                </button>
              </div>
              {/* branch img */}
              <img
                src="src/assets/images/home/branch3.webp"
                alt="branch"
                className="w-36 md:w-full object-cover"
              />
              {/* branch content */}
              <div className="flex flex-col items-center gap-1 px-3 md:-translate-y-2 md:group-hover:-translate-y-10 pb-4 pt-2 transition-all duration-300 w-full bg-white z-10 text-center">
                {/* brach title */}
                <h4 className="text-sm md:text-lg lg:text-2xl  font-estedadMedium md:font-estedadSemiBold">
                  شعبه ونک
                </h4>
                {/* branch caption */}
                <p className="text-2xs text-gray-700 md:text-sm md:font-estedadMedium md:h-20 lg:h-16 xl:h-10">
                  میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
                </p>
                {/* branch btn */}
                <NavLink
                  to="/branch"
                  className="flex-center gap-1 md:text-primary text-xs md:p-2 md:rounded md:border md:border-primary absolute md:h-8 md:w-32 md:left-0 md:right-0 md:mx-auto md:-bottom-8 md:group-hover:-bottom-8 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="hidden md:block">صفحه شعبه</span>
                  <GoChevronLeft className="w-4 h-4 hidden md:block" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showGalleryModal && (
        <Overlay onHide={closeGalleryModal}>
          <div
            className={`thumb__gallery fixed rounded-lg overflow-hidden w-11/12 md:w-9/12 xl:w-7/12 h-[90%] md:h-3/4 inset-0 m-auto z-30  transition-all duration-300 ${
              showGalleryModal ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className="mySwiper2 overflow-hidden w-full h-5/6 mx-auto rounded-lg"
            >
              <SwiperSlide>
                <img
                  src="src/assets/images/home/gallery1.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src/assets/images/home/gallery2.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src/assets/images/home/gallery3.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src/assets/images/home/gallery4.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src/assets/images/home/gallery5.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src/assets/images/home/gallery6.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src/assets/images/home/gallery7.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <button
                onClick={closeGalleryModal}
                className="absolute top-1 left-1 z-40 text-white"
              >
                <IoMdClose className="w-8 md:w-10 h-8 md:h-10" />
              </button>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={2.5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              breakpoints={{
                480: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 5.5,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 5.5,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 6.5,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 6.5,
                  spaceBetween: 32,
                },
              }}
              className="mySwiper absolute bottom-40 xs:bottom-24 md:bottom-20 xl:bottom-24 left-0 mx-auto px-0 right-0 h-1/6 md:h-1/5 w-10/12 overflow-hidden py-2.5"
            >
              <SwiperSlide className="rounded border border-white">
                <img
                  src="src/assets/images/home/gallery1.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="rounded border border-white">
                <img
                  src="src/assets/images/home/gallery2.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="rounded border border-white">
                <img
                  src="src/assets/images/home/gallery3.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="rounded border border-white">
                <img
                  src="src/assets/images/home/gallery4.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="rounded border border-white">
                <img
                  src="src/assets/images/home/gallery5.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="rounded border border-white">
                <img
                  src="src/assets/images/home/gallery6.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="rounded border border-white">
                <img
                  src="src/assets/images/home/gallery7.webp"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </Overlay>
      )}
    </>
  );
}
