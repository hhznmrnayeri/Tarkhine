import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import NavigationIcon from './NavigationIcon';
import { NavLink } from 'react-router-dom';
export default function HeaderSlider(props) {
return (
<div className="header w-full h-44 md:h-80 relative">
    <Swiper
        pagination={{
            el: ".swiper-pagination",
            type:'bullets',
            clickable:true,
        }}
        navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
        }}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[FreeMode,Navigation,Pagination]}
        className="header__slider h-full"
    >
        <SwiperSlide>
            <div className="bg-header w-full h-full bg-cover bg-center bg-no-repeat"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-header-slide1 w-full h-full bg-cover bg-center bg-no-repeat"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-header-slide2 w-full h-full bg-cover bg-center bg-no-repeat"></div>
        </SwiperSlide>
    </Swiper>
    {/* title wrapper */}
    <div className="flex-center md:justify-between absolute top-0 bottom-0 my-auto z-10 w-full ">
        {/* prev slide btn */}
        <button className="text-white hidden md:block swiper-button-prev-custom mr-5">
            <GoChevronRight className="w-8 h-8"/>
        </button>
        {/* header title */}
        <h1 className="header__title text-tint-100 font-estedadBold md:text-4xl">{props.title}</h1>
        {/* next slide btn */}
        <button className="text-white hidden md:block swiper-button-next-custom ml-5">
            <GoChevronLeft className="w-8 h-8"/>
        </button>
    </div>
    {/* header btn */}
    <NavLink to='/menu' className="md:font-estedadMedium text-2xs md:text-base rounded bg-primary p-2 md:px-4 text-white text-center flex-center absolute z-10 h-6 w-24 md:h-10 md:w-48 left-0 right-0 mx-auto bottom-10 md:bottom-16">سفارش آنلاین غذا</NavLink>
    {/* navigation box */}
    <div className="h-8 w-32 absolute left-0 right-0 -bottom-[5px] z-10 mx-auto ">
        <NavigationIcon/>
    </div>
    <div className="swiper-pagination z-20 absolute left-0 right-0 mx-auto bottom-1 flex items-center justify-center gap-1"></div>
</div>
)
}