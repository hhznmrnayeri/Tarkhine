import React from "react";
import { NavLink } from "react-router-dom";
import ArrowLeftIcon from "../../assets/svg/ArrowLeftIcon";
import MenuBoardIcon from "../../assets/svg/MenuBoardIcon";
import UserIcon from "../../assets/svg/UserIcon";
import WifiIcon from "../../assets/svg/WifiIcon";
import DiagramIcon from "../../assets/svg/DiagramIcon";
export default function Intro() {
  return (
    <section className="bg-section bg-center bg-cover text-white mt-10 md:mt-12 py-4 md:py-12">
      <div className="container">
        {/* section wrapper */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 gap-x-16 lg:gap-x-48 xl:gap-x-60">
          {/* right box */}
          <div className="flex flex-col items-start gap-2 md:gap-4">
            {/* title */}
            <h3 className="md:text-2xl md:font-estedadBold">
              رستوران‌های زنجیره‌ای ترخینه
            </h3>
            {/* description */}
            <p className="text-2xs md:text-xl text-justify">
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>
            {/* btn */}
            <NavLink
              to="/about"
              className="text-xs md:text-base md:font-estedadMedium flex items-center gap-2 border border-white rounded p-2 md:px-4 self-end mt-2"
            >
              اطلاعات بیشتر
              <ArrowLeftIcon size="w-4 h-4 md:w-6 md:h-6" />
            </NavLink>
          </div>
          {/* left box */}
          <div className="flex-center flex-wrap w-full md:w-96 md:flex-shrink-0 justify-between gap-x-6 gap-y-8">
            {/* about item */}
            <div className="flex-center flex-col gap-1 md:gap-4 p-3">
              {/* about icon */}
              <UserIcon size="w-6 h-6 md:w-12 md:h-12" />
              {/* about title */}
              <h4 className="text-xs md:text-lg">پرسنلی مجرب و حرفه‌ای</h4>
            </div>
            {/* about item */}
            <div className="flex-center flex-col gap-1 md:gap-4 p-3">
              {/* about icon */}
              <DiagramIcon size="w-6 h-6 md:w-12 md:h-12" />
              {/* about title */}
              <h4 className="text-xs md:text-lg">کیفیت بالای غذاها</h4>
            </div>
            {/* about item */}
            <div className="flex-center flex-col gap-1 md:gap-4 p-3">
              {/* about icon */}
              <WifiIcon size="w-6 h-6 md:w-12 md:h-12" />
              {/* about title */}
              <h4 className="text-xs md:text-lg">محیطی دلنشین و آرام</h4>
            </div>
            {/* about item */}
            <div className="flex-center flex-col gap-1 md:gap-4 p-3">
              {/* about icon */}
              <MenuBoardIcon size="w-6 h-6 md:w-12 md:h-12" />
              {/* about title */}
              <h4 className="text-xs md:text-lg">منوی متنوع</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
