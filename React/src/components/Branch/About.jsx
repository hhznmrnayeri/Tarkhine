import React from 'react'
import { PiPhoneCall } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
export default function About() {
return (
<section className=" h-11 md:h-32">
    <div className="container relative">
        {/* about box */}
        <div className="w-11/12 lg:w-7/12 mx-auto -top-8 absolute z-10 left-0 right-0 h-14 md:h-32 border md:border-4 border-primary bg-white rounded md:rounded-lg p-2 text-2xs md:text-base md:py-4 xl:px-12 flex items-start justify-between flex-wrap gap-y-2">
            {/* address */}
            <div className="flex items-center gap-1 md:flex-col md:gap-2 flex-shrink-0 md:flex-1 text-center md:order-2">
                {/* icon */}
                <IoLocationOutline className="w-4 h-4 md:w-8 md:h-8"/>
                {/* text */}
                <p>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
            </div>
            {/* phone */}
            <div className="flex items-center gap-1 md:flex-col md:gap-2 flex-shrink-0 md:flex-1 text-center md:order-1">
                {/* icon */}
                <PiPhoneCall className="w-4 h-4 md:w-8 md:h-8"/>
                {/* text */}
                <p className="md:hidden">۰۲۱-۵۴۸۹۱۲۵۰-۵۱</p>
                <span className="hidden md:block">۰۲۱-۳۳۵۳۵۳۵۴</span>
                <span className="hidden md:block">۰۲۱-۳۳۵۳۵۳۵۶</span>
            </div>
            {/* address */}
            <div className="flex items-center gap-1 md:flex-col md:gap-2 flex-shrink-0 md:flex-1 text-center md:order-2">
                {/* icon */}
                <FiClock className="w-4 h-4 md:w-8 md:h-8"/>
                {/* text */}
                <p>همه‌روزه از ساعت ۱۲  الی ۲۳</p>
            </div>
        </div>
    </div>
</section>
)
}