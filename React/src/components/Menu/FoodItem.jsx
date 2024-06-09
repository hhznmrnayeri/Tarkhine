import React, { useState } from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import Overlay from '../share/Overlay';
import { IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
export default function FoodItem(props) {
    const [showGalleryModal,setShowGalleryModal]=useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const openGalleryModal=()=>{
        setShowGalleryModal(true);
    }
    const closeGalleryModal=()=>{
        setShowGalleryModal(false);
        setThumbsSwiper(null);
    }
    const [starCount]=useState(props.star);
    let emptyStar=5-starCount;
    let starArray=[]
    for(let i=0;i<emptyStar;i++){
        starArray.push('hidden')
    }
    for(let i=0;i<starCount;i++){
        starArray.push('fill-[#F4B740] ')
    }
return (
<>
<div className="group col-span-1 xl:col-span-6 flex gap-2 md:gap-8 rounded md:rounded-lg border border-gray-400 shadow-none md:hover:shadow-card transition-all duration-300 overflow-hidden h-28 md:h-40">
    {/* item img */}
    <img src={props.img} alt="food" onClick={openGalleryModal} className="w-24 md:w-40 cursor-pointer"/>
    {/* item content */}
    <div className=" pl-2 md:pl-4 flex flex-col items-end gap-1 justify-center xl:justify-evenly w-full relative">
        {/* top box */}
        <div className="flex items-end gap-2 justify-between w-full md:gap-4">
            {/* right box */}
            <div className="flex flex-col items-start gap-2">
                {/* item title */}
                <h4 className="text-xs md:font-estedadSemiBold md:text-xl">{props.title}</h4>
                {/* item resepi */}
                <p className="text-2xs md:text-sm">{props.resepi}</p>
            </div>
            {/* left box */}
            <div className="flex flex-col items-end gap-2 md:gap-0">
                {/* offer wrapper */}
                <div className={`${props.offerWrapper} items-center gap-2`}>
                    {/* offer price */}
                    <h6 className="text-2xs md:text-base text-gray-500 line-through">{props.offerPrice}</h6>
                    {/* offer count */}
                    <span className="text-error text-2xs md:text-xs rounded-lg bg-error-200 px-1">{props.offerCount}%</span>
                </div>
                {/* price item */}
                <span className="text-2xs md:text-lg flex flex-shrink-0"><span>{props.priceValue}</span> تومان</span>
            </div>
        </div>
        {/* bottom box */}
        <div className="flex items-center gap-2 xl:gap-6 mr-4">
            {/* star wrapper */}
            <div className="flex items-center">
                {starArray.map((index,item)=>(<IoMdStar key={item} className={`w-4 h-4 md:w-6 md:h-6 ${index}`}/>))}
            </div>
            {/* item btn */}
            <button className="item__btn flex-center p-2 md:w-60 text-white bg-primary rounded text-2xs md:text-base md:font-estedadMedium md:px-4">افزودن به سبد خرید</button>
        </div>
        {/* favorite btn */}
        <button className="absolute w-4 h-4 md:w-6 md:h-6 bottom-1.5 right-0 top-auto left-auto md:left-4 md:top-0.5 md:bottom-auto md:right-auto md:invisible md:opacity-0 md:group-hover:visible md:group-hover:opacity-100 transition-all duration-300 ">
            <IoMdHeartEmpty className="w-4 h-4 md:w-6 md:h-6"/>
        </button>
    </div>
</div>
{showGalleryModal&&<Overlay onHide={closeGalleryModal}>
<div className={`food__gallery fixed rounded-lg bg-white overflow-hidden w-11/12 md:w-9/12 xl:w-7/12 h-[90%] md:h-3/4 inset-0 m-auto z-30 flex flex-col transition-all duration-300 ${showGalleryModal?'visible opacity-100':'invisible opacity-0'}`}>
        <div className="bg-gray-300 py-2 px-6 flex items-center justify-between order-1">
            <h4 className="font-estedadSemiBold text-sm md:text-2xl mx-auto">اطلاعات محصول</h4>
            <button onClick={closeGalleryModal} className="absolute top-1 left-6 z-40">
                <IoMdClose className="w-8 md:w-10 h-8 md:h-10"/>
            </button>
        </div>
        <div className="flex items-start justify-between p-4 order-3">
            <div className="flex flex-col items-start gap-1">
                <h5 className="font-estedadBold">کوفته برنجی</h5>
                <p className="text-sm">برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز</p>
            </div>
            <div className="flex flex-col items-end gap-1">
                <div className="flex items-center">
                    <svg className="w-6 h-6">
                        <use href="#star"></use>
                    </svg>
                    <svg className="w-6 h-6">
                        <use href="#star"></use>
                    </svg>
                    <svg className="w-6 h-6">
                        <use href="#star"></use>
                    </svg>
                    <svg className="w-6 h-6">
                        <use href="#star"></use>
                    </svg>
                    <svg className="w-6 h-6">
                        <use href="#star"></use>
                    </svg>
                </div>
                <span className="text-sm text-gray-400">(<span className="comment__count">۷۵</span> نظر)</span>
            </div>
        </div>
    <Swiper
        style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 overflow-hidden w-full h-5/6 mx-auto order-2 relative"
    >
        <SwiperSlide>
            <img src="src/assets/images/menu/food1.webp" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="src/assets/images/menu/food2.webp" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="src/assets/images/menu/food3.webp" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="src/assets/images/menu/food4.webp" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="src/assets/images/menu/food5.webp" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="src/assets/images/menu/food6.webp" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="src/assets/images/menu/food7.webp" className="w-full h-full object-cover"/>
        </SwiperSlide>
    </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={2.5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            breakpoints={{
                480:{
                    slidesPerView:4,
                    spaceBetween:10
                },
                640:{
                    slidesPerView:5.5,
                    spaceBetween:10
                },
                768:{
                    slidesPerView:5.5,
                    spaceBetween:10
                },
                1024:{
                    slidesPerView:6.5,
                    spaceBetween:24
                },
                1280:{
                    slidesPerView:6.5,
                    spaceBetween:32
                },
            }}
            className="mySwiper absolute bottom-40 xs:bottom-24 md:bottom-20 xl:bottom-24 left-0 mx-auto px-0 right-0 md:h-1/5 w-10/12 overflow-hidden py-2.5 h-20 z-20"
        >
            <SwiperSlide className='rounded border border-white'>
                <img src="src/assets/images/menu/food1.webp" className="w-full h-full object-cover"/>
            </SwiperSlide>
            <SwiperSlide className='rounded border border-white'>
                <img src="src/assets/images/menu/food2.webp" className="w-full h-full object-cover"/>
            </SwiperSlide>
            <SwiperSlide className='rounded border border-white'>
                <img src="src/assets/images/menu/food3.webp" className="w-full h-full object-cover"/>
            </SwiperSlide>
            <SwiperSlide className='rounded border border-white'>
                <img src="src/assets/images/menu/food4.webp" className="w-full h-full object-cover"/>
            </SwiperSlide>
            <SwiperSlide className='rounded border border-white'>
                <img src="src/assets/images/menu/food5.webp" className="w-full h-full object-cover"/>
            </SwiperSlide>
            <SwiperSlide className='rounded border border-white'>
                <img src="src/assets/images/menu/food6.webp" className="w-full h-full object-cover"/>
            </SwiperSlide>
            <SwiperSlide className='rounded border border-white'>
                <img src="src/assets/images/menu/food7.webp" className="w-full h-full object-cover"/>
            </SwiperSlide>
        </Swiper>
</div>
</Overlay>}
</>
)
}