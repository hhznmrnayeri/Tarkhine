import React from 'react'
import SectionTitle from './SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import { IoMdStar } from "react-icons/io";
export default function Comment() {
return (
<section className="mt-6 md:mt-12">
    <SectionTitle title='نظرات کاربران' center='true'/>
    <div className="container relative">
        <Swiper
            slidesPerView={1.1}
            spaceBetween={16}
            pagination={{
                el: ".swiper-pagination-custom2",
                type:'bullets',
                clickable:true,
            }}
            breakpoints={{
                    420:{
                        slidesPerView:1.4,
                        spaceBetween:16
                    },
                    640:{
                        slidesPerView:2.1,
                        spaceBetween:24
                }}
            }
            modules={[Pagination]}
            className='comment mt-3 md:mt-5 pb-6 md:pb-12'
        >
            <SwiperSlide>
                <div className="rounded border border-gray-400 px-4 py-5 flex items-center gap-2 md:gap-3 md:rounded-lg md:px-8 md:py-6">
                            {/* right box */}
                            <div className="flex flex-col items-center gap-1 text-gray-700 text-2xs md:text-sm md:gap-2 flex-shrink-0 child:flex-shrink-0">
                                {/* img */}
                                <img src="src/assets/images/branch/user.webp" alt="user" className="w-14 h-14 md:w-24 md:h-24"/>
                                {/* name */}
                                <h5>آرزو محمدعلیزاده</h5>
                                {/* date */}
                                <h6>۲۳ اسفند ۱۴۰۱</h6>
                            </div>
                            {/* left box */}
                            <div className="flex flex-col gap-1 ">
                                {/* comment text */}
                                <p className="text-2xs md:text-base text-justify">از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. </p>
                                {/* star wrapper */}
                                <div className="self-end flex items-center gap-1 text-xs md:text-base md:font-estedadMedium">
                                    {/* icon */}
                                    <IoMdStar className="w-3 h-3 md:w-4 md:h-4 text-[#F4B740]"/>
                                    {/* point */}
                                    <span>۳</span>
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded border border-gray-400 px-4 py-5 flex items-center gap-2 md:gap-3 md:rounded-lg md:px-8 md:py-6">
                            {/* right box */}
                            <div className="flex flex-col items-center gap-1 text-gray-700 text-2xs md:text-sm md:gap-2 flex-shrink-0 child:flex-shrink-0">
                                {/* img */}
                                <img src="src/assets/images/branch/user2.webp" alt="user" className="w-14 h-14 md:w-24 md:h-24"/>
                                {/* name */}
                                <h5>سردار وظیفه</h5>
                                {/* date */}
                                <h6>۲۳ اسفند ۱۴۰۱</h6>
                            </div>
                            {/* left box */}
                            <div className="flex flex-col gap-1 ">
                                {/* comment text */}
                                <p className="text-2xs md:text-base text-justify">از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. </p>
                                {/* star wrapper */}
                                <div className="self-end flex items-center gap-1 text-xs md:text-base md:font-estedadMedium">
                                    {/* icon */}
                                    <IoMdStar className="w-3 h-3 md:w-4 md:h-4 text-[#F4B740]"/>
                                    {/* point */}
                                    <span>۳</span>
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded border border-gray-400 px-4 py-5 flex items-center gap-2 md:gap-3 md:rounded-lg md:px-8 md:py-6">
                            {/* right box */}
                            <div className="flex flex-col items-center gap-1 text-gray-700 text-2xs md:text-sm md:gap-2 flex-shrink-0 child:flex-shrink-0">
                                {/* img */}
                                <img src="src/assets/images/branch/user.webp" alt="user" className="w-14 h-14 md:w-24 md:h-24"/>
                                {/* name */}
                                <h5>آرزو محمدعلیزاده</h5>
                                {/* date */}
                                <h6>۲۳ اسفند ۱۴۰۱</h6>
                            </div>
                            {/* left box */}
                            <div className="flex flex-col gap-1 ">
                                {/* comment text */}
                                <p className="text-2xs md:text-base text-justify">از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. </p>
                                {/* star wrapper */}
                                <div className="self-end flex items-center gap-1 text-xs md:text-base md:font-estedadMedium">
                                    {/* icon */}
                                    <IoMdStar className="w-3 h-3 md:w-4 md:h-4 text-[#F4B740]"/>
                                    {/* point */}
                                    <span>۳</span>
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <div className="swiper-pagination-custom2 z-20 absolute left-0 right-0 mx-auto bottom-6 flex items-center justify-center gap-1"></div>
        </Swiper>
    </div>
</section>
)
}