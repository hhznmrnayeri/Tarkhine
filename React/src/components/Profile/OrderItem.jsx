import React from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineTruck } from "react-icons/hi2";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import FoodItem from './FoodItem';
export default function OrderItem(props) {
return (
<div className="order__item col-span-12 w-full border border-gray-400 rounded px-3 pt-2 pb-4 md:px-6 md:pb-6 md:pt-4">
    {/* top wrapper */}
    <div className="flex items-start justify-between mb-4">
        {/* right box */}
        <div className="flex flex-col items-start gap-4 md:gap-2">
            {/* branch name */}
            <span className="md:mt-2 text-xs md:text-sm text-gray-600">{props.branchName}</span>
            {/* detail wrapper */}
            <div className="flex flex-col md:flex-row flex-wrap items-start gap-2 text-gray-600 md:text-gray-700 text-2xs">
                {/* detail item */}
                <div className="flex items-center gap-1 md:order-1">
                    {/* detail icon */}
                    <MdOutlineCalendarMonth className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0"/>
                    {/* detail text */}
                    <p>{props.date}</p>
                </div>
                {/* detail item */}
                <div className="flex items-center gap-1 md:order-2">
                    {/* detail icon */}
                    <IoLocationOutline className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0"/>
                    {/* detail text */}
                    <p>{props.address}</p>
                </div>
                {/* detail item */}
                <div className="flex items-center gap-1 md:order-1 ">
                    {/* detail icon */}
                    <LuWallet className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 md:hidden"/>
                    {/* detail text */}
                    <p>مبلغ: <span>{props.price}</span>تومان تخفیف: <span>{props.off}</span>تومان</p>
                </div>
            </div>
        </div>
        {/* left box */}
        <div className="flex flex-col items-end gap-4 flex-shrink-0 xl:w-72">
            {/* label wrapper */}
            <div className="flex items-center gap-2 text-2xs md:text-xs">
                {/* delivery label */}
                <span className="delivery__label">{props.delivery==='courier'?'ارسال توسط پیک':'تحویل حضوری'}</span>
                {/* order state */}
                {props.active?<span className="order__state">جاری</span>:
                props.isComplete?<span className="delivered">تحویل شده</span>:<span className="canceled">لغو شده</span>}
            </div>
            {/* detail item */}
            {props.active?<div className="flex items-center gap-1 text-gray-600 md:text-gray-700 text-2xs md:text-xs">
                {/* detail icon */}
                <FaRegClock className="w-3 h-3 md:w-4 md:h-4"/>
                {/* detail text */}
                <p>آماده تحویل تا <span className="text-primary" dir="ltr">{props.hour}</span></p>
            </div>
            :null}
        </div>
    </div>
    {/* order state */}
    {props.active?<div className="flex items-center gap-1 md:gap-2 justify-between px-2 lg:px-10 text-gray-400 text-sm">
        {/* state item */}
        <span className="state__order state__order--active flex items-center">
            <HiOutlineHome className="w-4 h-4 md:w-6 md:h-6"/>
            <span className="hidden md:block">در حال آماده‌سازی</span>
        </span>
        <div className="h-px border border-dashed border-gray-400 flex-1"></div>
            {/* state item */}
            <span className="state__order flex items-center">
                <HiOutlineTruck className="w-4 h-4 md:w-6 md:h-6"/>
                <span className="hidden md:block">ارسال توسط پیک</span>
            </span>
            <div className="h-px border border-dashed border-gray-400 flex-1"></div>
                {/* state item */}
                <span className="state__order flex items-center">
                    <FaRegCircleCheck className="w-4 h-4 md:w-6 md:h-6"/>
                    <span className="hidden md:block">تحویل سفارش</span>
                </span>
    </div>
    :null}
    <Swiper
        spaceBetween= {16}
        slidesPerView={2.5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode]}
        breakpoints={{
            480:{
                slidesPerView:3.5,
                spaceBetween:16
            },
            640:{
                slidesPerView:5.5,
                spaceBetween:16
            },
            768:{
                slidesPerView:4.5,
                spaceBetween:16
            },
            1024:{
                slidesPerView:5.5,
                spaceBetween:24
            },
            1280:{
                slidesPerView:6,
                spaceBetween:24
            },
        }}
        className='mt-4'
    >
        {props.foodArray.map((item,index)=>(<SwiperSlide key={index}>
            <FoodItem {...item}/>
        </SwiperSlide>))}
    </Swiper>
    {/* btn */}
    {props.active?<button className="cancel__order mx-auto md:ml-0 md:mr-auto border rounded p-2 text-xs flex-center h-8 w-24 md:w-30 text-error border-error mt-4">لغو سفارش</button>:<button className=" mx-auto md:ml-0 md:mr-auto border rounded p-2 text-xs flex-center h-8 w-24 md:w-30 text-primary border-primary mt-4">سفارش مجدد</button>}
</div>
)
}