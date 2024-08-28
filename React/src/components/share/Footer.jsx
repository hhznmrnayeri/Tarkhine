import React from "react";
import { NavLink } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { LiaTelegramPlane } from "react-icons/lia";
export default function Footer() {
  return (
    <footer className="bg-footer bg-center bg-cover text-gray-300 py-5 md:py-8">
      <div className="container">
        {/* footer wrapper */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          {/* right box */}
          <div className="flex flex-col items-start gap-1 md:gap-4 flex-shrink-0">
            {/* title box */}
            <h6 className="text-white text-xs md:text-xl md:font-estedadBold">
              دسترسی آسان
            </h6>
            {/* list box */}
            <ul className="flex flex-col items-start gap-1 md:gap-4 text-xs md:text-sm md:font-estedadMedium">
              {/* list item */}
              <NavLink to="/question">پرسش‌های متداول</NavLink>
              {/* list item */}
              <NavLink to="/question/rules">قوانین ترخینه</NavLink>
              {/* list item */}
              <NavLink to="/question/privacy">حریم خصوصی</NavLink>
            </ul>
            {/* icon wrapper */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* media icon */}
              <NavLink to="">
                <RiTwitterXLine className="w-4 h-4 md:w-6 md:h-6" />
              </NavLink>
              {/* media icon */}
              <NavLink to="">
                <SiInstagram className="w-4 h-4 md:w-6 md:h-6" />
              </NavLink>
              {/* media icon */}
              <NavLink to="">
                <LiaTelegramPlane className="w-4 h-4 md:w-6 md:h-6" />
              </NavLink>
            </div>
          </div>
          {/* center box */}
          <div className="flex flex-col items-start gap-1 md:gap-4 flex-shrink-0">
            {/* title box */}
            <h6 className="text-white text-xs md:text-xl md:font-estedadBold">
              شعبه‌های ترخینه
            </h6>
            {/* list box */}
            <ul className="flex flex-col items-start gap-1 md:gap-4 text-xs md:text-sm md:font-estedadMedium">
              {/* list item */}
              <NavLink to="/branch">شعبه اکباتان</NavLink>
              {/* list item */}
              <NavLink to="/branch">شعبه چالوس</NavLink>
              {/* list item */}
              <NavLink to="/branch">شعبه اقدسیه</NavLink>
              {/* list item */}
              <NavLink to="/branch">شعبه ونک</NavLink>
            </ul>
          </div>
          {/* left box */}
          <form className="hidden lg:flex flex-col items-start gap-4">
            {/* form title */}
            <h6 className="text-white text-xs md:text-xl md:font-estedadBold">
              پیام به ترخینه
            </h6>
            {/* form wrapper */}
            <div className="flex items-stretch gap-6 text-sm">
              {/* input wrapper */}
              <div className="flex flex-col gap-3">
                {/* input */}
                <input
                  type="text"
                  className="py-3 px-4 border outline-none border-gray-700 rounded bg-transparent"
                  placeholder="نام و نام خانوادگی"
                />
                {/* input */}
                <input
                  type="text"
                  className="py-3 px-4 border outline-none border-gray-700 rounded bg-transparent"
                  placeholder="شماره تماس"
                />
                {/* input */}
                <input
                  type="text"
                  className="py-3 px-4 border outline-none border-gray-700 rounded bg-transparent"
                  placeholder="آدرس ایمیل (اختیاری)"
                />
              </div>
              {/* textarea */}
              <textarea
                className="py-3 px-4 border outline-none border-gray-700 rounded bg-transparent"
                cols="30"
                rows="6"
                placeholder="پیام شما"
              ></textarea>
            </div>
            {/* form btn */}
            <button className="text-sm font-estedadMedium px-4 py-2 flex-center rounded border border-gray-700 self-end h-10 w-44">
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
