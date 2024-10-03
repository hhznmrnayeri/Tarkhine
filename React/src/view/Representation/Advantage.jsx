import React from "react";
import SectionTitle from "./SectionTitle";
export default function Advantage() {
  return (
    <div className="container">
      <section className="text-center mt-4 md:mt-12 pb-4 md:pb-14 border-b border-gray-400">
        <SectionTitle title="مزیت دریافت نمایندگی" />
        {/* advantage wrapper */}
        <div className="flex justify-center items-start flex-col lg:flex-row gap-y-4  lg:gap-24 text-2xs md:text-xl mt-2 md:mt-6 ">
          <div className="flex flex-col items-start justify-center mr-12 lg:text-justify gap-y-4">
            {/* advantage item */}
            <p className="advantage__item">استفاده از برند شناخته شده ترخینه</p>
            {/* advantage item */}
            <p className="advantage__item">
              مشاوره در امور حقوقی، مالی و مالیاتی
            </p>
            {/* advantage item */}
            <p className="advantage__item">به حداقل رساندن ریسک سرمایه گذاری</p>
            {/* advantage item */}
            <p className="advantage__item">پشتیبانی بازاریابی و منابع انسانی</p>
          </div>
          <div className="flex flex-col items-start justify-center mr-12 lg:text-justify gap-y-4">
            {/* advantage item */}
            <p className="advantage__item">تسریع روند بازگشت سرمایه</p>
            {/* advantage item */}
            <p className="advantage__item">
              دریافت مشاوره جهت تامین مواد اولیه و تجهیزات
            </p>
            {/* advantage item */}
            <p className="advantage__item">
              مشاوره های تخصصی جهت مدیریت رستوران
            </p>
            {/* advantage item */}
            <p className="advantage__item">طرح های تشویقی برای ارتقا فروش</p>
          </div>
        </div>
      </section>
    </div>
  );
}
