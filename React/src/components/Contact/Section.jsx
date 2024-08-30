import React, { useState } from "react";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { AiOutlineExpand } from "react-icons/ai";
import Overlay from "../share/Overlay";
import { IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import BaseUrl from "../share/BaseUrl";
import { NavLink } from "react-router-dom";
export default function Section({ branchArray }) {
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [galleryArray, setGalleryArray] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const openGalleryModal = () => {
    setShowGalleryModal(true);
  };
  const closeGalleryModal = () => {
    setShowGalleryModal(false);
    setThumbsSwiper(null);
  };
  function getGalleryArray(id) {
    fetch(`${BaseUrl}/branches?_embed=albums`)
      .then((res) => res.json())
      .then((data) => {
        setGalleryArray(data[id - 1].albums);
        openGalleryModal();
      });
  }
  return (
    <>
      <div className="container mb-6 md:mb-12">
        {/* branch wrapper */}
        <div className="flex flex-col gap-7 md:gap-6 mt-6 md:mt-12">
          {branchArray.map((item) => (
            <div
              key={item.id}
              className="flex items-center flex-col md:flex-row justify-between gap-2 md:h-72 border border-gray-400 rounded md:rounded-lg group relative overflow-hidden"
            >
              {/* overlay */}
              <div className="md:flex md:flex-center md:bg-black/40 w-full md:w-6/12 h-full md:rounded-lg absolute md:inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                {/* gallery icon */}
                <button
                  onClick={() => getGalleryArray(item.id)}
                  className="gallery__icon text-white"
                >
                  <TbPhotoSquareRounded className="w-14 h-14 hidden md:block" />
                  <AiOutlineExpand className="w-4 h-4 top-20 right-2 my-auto absolute md:hidden" />
                </button>
              </div>
              {/* branch img */}
              <img
                src={`${item.img}`}
                alt="branch"
                className="w-full md:w-6/12 h-28 md:h-full object-cover"
              />
              {/* branch content */}
              <div className="flex flex-col items-center gap-1 px-3 md:-translate-y-2 md:group-hover:-translate-y-10 pb-4 transition-all duration-300 bg-white z-10 text-center md:flex-1 w-full">
                {/* brach title */}
                <h4 className="text-xs md:text-xl md:font-estedadSemiBold">
                  شعبه {item.title}
                </h4>
                {/* branch address */}
                <p className="text-gray-700 text-2xs md:text-lg mt-1 md:mt-2">
                  {item.address}
                </p>
                {/* branch phone */}
                <p className="text-gray-700 text-2xs md:text-lg">
                  شماره تماس: <span dir="ltr">{item.phone}</span>
                </p>
                {/* branch time */}
                <p className="text-gray-700 text-2xs md:text-lg">
                  ساعت کاری: همه‌روزه از ساعت {item.start_time} تا{" "}
                  {item.finish_time} بجز روز‌های تعطیل
                </p>
                {/* btn wrapper */}
                <div className="flex-center gap-4 md:gap-5 mt-3 text-2xs md:text-base md:font-estedadMedium md:absolute md:h-10 w-full md:left-0 md:right-0 md:mx-auto md:-bottom-10 md:group-hover:-bottom-10 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  {/* branch btn */}
                  <NavLink
                    to="/branch"
                    className="flex-center text-primary bg-white border border-primary rounded h-6 md:h-10 w-full md:w-32"
                  >
                    صفحه شعبه
                  </NavLink>
                  {/* map btn */}
                  <button className="bg-primary text-white rounded h-6 md:h-10 w-full md:w-32">
                    دیدن در نقشه
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
              {galleryArray.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={`${item.img}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
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
              {galleryArray.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="rounded border border-white"
                >
                  <img
                    src={`${item.img}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Overlay>
      )}
    </>
  );
}
