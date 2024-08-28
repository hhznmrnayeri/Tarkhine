import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import SectionSubTitle from "./SectionSubTitle";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import Overlay from "../share/Overlay";
export default function Form() {
  const [showCity, setShowCity] = useState(false);
  const openModal = () => {
    setShowCity(true);
  };
  const closeModal = () => {
    setShowCity(false);
  };
  return (
    <>
      <div className="container mb-6 md:mb-12">
        <form className="text-center mt-4 md:mt-12 py-4 md:py-8 px-4 md:px-6 border border-gray-400 flex flex-col">
          <SectionTitle title="فرم درخواست نمایندگی" />
          <SectionSubTitle subTitle="مشخصات فردی متقاضی" />
          {/* input wrapper */}
          <div className="flex items-center gap-4 text-sm w-full mt-6 flex-col sm:flex-row">
            {/* input */}
            <input
              type="text"
              className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
              placeholder="نام و نام‌خانوادگی"
            />
            {/* input */}
            <input
              type="text"
              className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
              placeholder="کدملی"
            />
            {/* input */}
            <input
              type="text"
              className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
              placeholder="شماره تماس"
            />
          </div>
          <SectionSubTitle subTitle="آدرس ملک متقاضی" />
          {/* input wrapper */}
          <div className="flex items-center gap-4 text-sm w-full mt-6 flex-col md:flex-row ">
            {/* right box */}
            <div className="flex items-start gap-4 text-sm w-full flex-col flex-1">
              {/* top box */}
              <div className="flex items-start gap-4 text-sm w-full flex-col lg:flex-row">
                {/* input wrapper */}
                <div
                  className="shire__wrapper group relative w-full flex-1 flex flex-col"
                  onClick={openModal}
                  tabIndex="1"
                >
                  {/* input */}
                  <input
                    type="text"
                    className=" outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full"
                    placeholder="استان"
                  />
                  {/* sub menu */}
                  {showCity && (
                    <div className="visible opacity-100 h-48 z-30 absolute  w-full left-0 right-0 top-full bg-white rounded-lg shadow-card p-2 text-sm overflow-y-auto flex flex-col gap-px ">
                      {/* city item */}
                      <button className="outline-none  py-2 border-b border-gray-300 w-full text-start">
                        تهران
                      </button>
                      {/* city item */}
                      <button className="outline-none  py-2 border-b border-gray-300 w-full text-start">
                        اصفهان
                      </button>
                      {/* city item */}
                      <button className="outline-none  py-2 border-b border-gray-300 w-full text-start">
                        شیراز
                      </button>
                      {/* city item */}
                      <button className="outline-none  py-2 border-b border-gray-300 w-full text-start">
                        مشهد
                      </button>
                      {/* city item */}
                      <button className="outline-none  py-2 border-b border-gray-300 w-full text-start">
                        کرمان
                      </button>
                      {/* city item */}
                      <button className="outline-none  py-2 border-b border-gray-300 w-full text-start">
                        تهران
                      </button>
                      {/* city item */}
                      <button className="outline-none  py-2 border-b border-gray-300 w-full text-start">
                        تهران
                      </button>
                    </div>
                  )}
                </div>
                {/* input */}
                <input
                  type="text"
                  className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                  placeholder="شهر"
                  tabIndex="2"
                />
              </div>
              {/* bottom box */}
              <div className="flex items-start gap-4 text-sm w-full flex-col lg:flex-row">
                {/* input */}
                <input
                  type="text"
                  className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full lg:w-[252px] xl:w-[380px] "
                  placeholder="منطقه"
                />
                {/* input */}
                <textarea
                  className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                  placeholder="آدرس دقیق"
                  rows="6"
                ></textarea>
              </div>
            </div>
            {/* left box */}
            <div className="bg-map rounded border border-gray-400 flex flex-col text-primary justify-between self-stretch p-3 w-full md:w-96">
              {/* top box */}
              <div className="flex flex-col self-end items-center gap-1">
                {/* zoom in */}
                <button className="bg-white gap-1.5 rounded-sm shadow-4 w-5 h-5">
                  +
                </button>
                {/* zoom out */}
                <button className="bg-white gap-1.5 rounded-sm shadow-4 w-5 h-5">
                  -
                </button>
              </div>
              {/* submit map */}
              <button className="text-xs font-estedadMedium bg-white py-0.5 px-3 rounded self-center  ">
                ثبت موقعیت
              </button>
            </div>
          </div>
          <SectionSubTitle subTitle="مشخصات ملک متقاضی" />
          {/* input wrapper */}
          <div className="flex items-center gap-4 text-sm w-full mt-6 flex-col sm:flex-row">
            {/* input */}
            <input
              type="text"
              className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
              placeholder="نوع مالکیت"
            />
            {/* input */}
            <input
              type="text"
              className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
              placeholder="مساحت ملک (متر مربع)"
            />
            {/* input */}
            <input
              type="text"
              className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
              placeholder="سن بنا"
            />
          </div>
          <SectionSubTitle subTitle="امکانات ملک متقاضی" />
          {/* input wrapper */}
          <div className="flex items-start gap-4 text-sm w-full mt-6 flex-col md:flex-row ">
            {/* right box */}
            <div className="flex items-start gap-4 flex-col flex-1 text-gray-700">
              {/* box title */}
              <h5 className="">ملک متقاضی:</h5>
              {/* checkbox wrapper */}
              <div className="flex gap-x-20 flex-col xs:flex-row gap-y-2">
                {/* right box */}
                <div className="flex items-start gap-2 text-sm  flex-col ">
                  {/* checkbox */}
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="license" id="license" />
                    <label htmlFor="license" className="">
                      پروانه کسب دارد.
                    </label>
                  </div>
                  {/* checkbox */}
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="parking" id="license" />
                    <label htmlFor="parking" className="">
                      پارکینگ دارد.
                    </label>
                  </div>
                </div>
                {/* left box */}
                <div className="flex items-start gap-2 text-sm  flex-col ">
                  {/* checkbox */}
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="kitchen" id="license" />
                    <label htmlFor="kitchen" className="">
                      آشپزخانه دارد.
                    </label>
                  </div>
                  {/* checkbox */}
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="warehouse" id="license" />
                    <label htmlFor="warehouse" className="">
                      انبار دارد.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* left box */}
            <div className=" text-gray-700 flex flex-col flex-1 items-start w-full">
              {/* box title */}
              <h5 className="">تصاویر ملک</h5>
              {/* choose box */}
              <div className="border-2 border-gray-400 rounded h-48 flex-center flex-col gap-2 w-full">
                <button>
                  <HiOutlineFolderPlus className="w-16 h-16" />
                </button>
                {/* caption */}
                <p className="font-estedadMedium text-sm">
                  تصاویری از ملک را بارگذاری کنید
                </p>
              </div>
            </div>
          </div>
          {/* form btn */}
          <button className="text-white bg-primary font-estedadMedium p-2 md:px-4 rounded h-10 w-48 self-center mt-4">
            ثبت اطلاعات
          </button>
        </form>
      </div>
      {showCity && (
        <Overlay onHide={closeModal} backgroundNone={true}></Overlay>
      )}
    </>
  );
}
