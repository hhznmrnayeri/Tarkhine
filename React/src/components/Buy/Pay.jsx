import React, { useState } from 'react'
import { GoChevronRight } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiCheckSquare } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { LuCreditCard } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { TbWallet } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";
import { TbAlertHexagon } from "react-icons/tb";

export default function Pay() {
  const [statePay,setStatePay]=useState('online');
  const [bankActive,setBankActive]=useState(1);
  return (
<div className='container'>
    <div className="flex items-center justify-between md:justify-center mt-6 md:mt-10">
                {/* back btn */}
                <button className="md:hidden">
                    <GoChevronRight className="w-4 h-4"/>
                </button>
                {/* state wrapper */}
                <div className="flex-center gap-2  text-sm md:w-1/2 ">
                    {/* state item */}
                    <span className="state__item flex items-center gap-1">
                        <MdOutlineShoppingCart className="w-6 h-6 hidden md:block"/>سبد خرید
                    </span>
                    {/* state line */}
                    <div className="hidden md:block flex-auto h-px bg-gray-400 border-dashed border-gray-400"></div>
                    {/* state item */}
                    <span className="state__item flex items-center gap-1">
                        <PiCheckSquare className="w-6 h-6 hidden md:block"/>تکمیل اطلاعات
                    </span>
                    {/* state line */}
                    <div className="hidden md:block flex-auto h-px bg-gray-400 border-dashed border-gray-400"></div>
                    {/* state item */}
                    <span className="state__item state__item--active flex items-center gap-1">
                        <IoWalletOutline className="w-6 h-6 hidden md:block"/>پرداخت
                    </span>
                </div>
                {/* trash btn */}
                <button className="md:hidden">
                    <IoTrashOutline className="w-4 h-4"/>
                </button>
    </div>
    <section className="my-6 md:my-10">
        <div className="basket__wrapper grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-6 p-6 md:p-0 rounded-lg md:rounded-none border md:border-none border-gray-400 overflow-hidden">
        <div className="col-span-1 lg:col-span-7 flex flex-col  overflow-hidden">
            {/* discount pay */}
            <form className="border border-gray-400 rounded-lg p-4 md:py-8 md:px-6 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-2 w-full">
                {/* title */}
                <h3 className="flex gap-1 items-center text-sm md:text-base pb-2 mb-2 md:mb-0 md:pb-0 border-b md:border-none border-gray-400 w-full md:w-auto"><CiDiscount1 className="w-4 md:w-6 h-4 md:h-6"/>ثبت کد تخفیف</h3>
                {/* form wrapper */}
                <div className="flex gap-2">
                    {/* input code */}
                    <input type="text" className="outline-none p-2 md:px-4 flex-1 border border-gray-400 rounded-lg text-sm text-gray-700" placeholder="کد تخفیف"/>
                    {/* submit discount */}
                    <button className="text-gray-300 text-xs rounded bg-gray-400 p-2 md:px-4">ثبت کد</button>
                </div>
            </form>
            {/* state pay */}
            <div className="border border-gray-400 rounded-lg p-4 md:py-8 md:px-6 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-2 w-full mt-3 md:mt-6">
                {/* title */}
                <h3 className="flex gap-1 items-center text-sm md:text-base pb-2 mb-2 md:mb-0 md:pb-0 border-b md:border-none border-gray-400 w-full md:w-auto"><CiWallet className="w-4 md:w-6 h-4 md:h-6"/>روش پرداخت</h3>
                {/* radio input */}
                <button onClick={()=>{setStatePay('online')}} className={`${statePay==='online'?'state__pay--active':''}  flex items-center gap-2`}>
                    <span className="state__radio w-4 h-4 rounded-full border border-gray-400 p-1 relative"></span>
                    <span className="flex items-center gap-1 text-gray-700 text-xs md:text-sm">پرداخت اینترنتی<CiCreditCard1 className="w-4 md:w-6 h-4 md:h-6"/></span>
                </button>
                {/* radio input */}
                <button onClick={()=>{setStatePay('offline')}} className={`${statePay==='offline'?'state__pay--active':''} flex items-center gap-2`}>
                    <span className="state__radio w-4 h-4 rounded-full border border-gray-400 p-1 relative"></span>
                    <span className="flex items-center gap-1 text-gray-700 text-xs md:text-sm">پرداخت در محل<TbWallet className="w-4 md:w-6 h-4 md:h-6"/></span>
                </button>
            </div>
            {/* section wrapper */}
            <div className="flex flex-col mt-3 md:mt-6 overflow-hidden">
                {statePay==='online'
                ?<div id="online" className="section__pay section__pay--active p-4 md:px-6 border border-gray-400 rounded-lg flex flex-col md:flex-row items-start gap-x-12">
                    {/* title */}
                    <h3 className="flex gap-1 items-center text-sm md:text-base pb-2 mb-2 md:mb-0 md:pb-0 border-b md:border-none border-gray-400 w-full md:w-auto flex-shrink-0"><CiCreditCard2 className="w-4 md:w-6 h-4 md:h-6"/>درگاه پرداخت</h3>
                    {/* content */}
                    <div className="flex flex-col gap-2 text-2xs text-center text-gray-700">
                        {/* bank wrapper */}
                        <div className="flex items-center gap-2 md:gap-4">
                            {/* bank item */}
                            <button onClick={()=>{setBankActive(1)}} className={`bank__item ${bankActive===1?'bank__item--active':''}`}>
                                <img src="../src/assets/images/buy/bank1.webp" alt="bank"/>
                            </button>
                            {/* bank item */}
                            <button onClick={()=>{setBankActive(2)}} className={`bank__item ${bankActive===2?'bank__item--active':''}`}>
                                <img src="../src/assets/images/buy/bank2.webp" alt="bank"/>
                            </button>
                            {/* bank item */}
                            <button onClick={()=>{setBankActive(3)}} className={`bank__item ${bankActive===3?'bank__item--active':''}`}>
                                <img src="../src/assets/images/buy/bank3.webp" alt="bank"/>
                            </button>
                        </div>
                        {/* caption */}
                        <p className=" md:text-xs">پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌</p>
                        {/* description */}
                        <p className=" ">(لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)‌</p>
                    </div>
                </div>
                :<div id="offline" className="section__pay p-4 md:px-6 border border-gray-400 rounded-lg flex flex-col md:flex-row items-start justify-between bg-gray-100 gap-4">
                    {/* title */}
                    <h3 className="flex gap-1 items-center text-sm md:text-base pb-2 mb-2 md:mb-0 md:pb-0 border-b md:border-none border-gray-400 w-full md:w-auto flex-shrink-0"><TbAlertHexagon className="w-4 md:w-6 h-4 md:h-6"/>قابل توجه</h3>
                    {/* caption */}
                    <p className="text-2xs text-gray-700">هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.</p>
                </div>
                }
            </div>
        </div>
            <div className="col-span-1 lg:col-span-5 flex lg:h-64 flex-col md:p-6 md:rounded-lg md:border md:border-gray-400 overflow-hidden">
                      {/* title wrapper */}
                      <div className="hidden md:flex items-center justify-between pb-3 md:border-b md:border-gray-400">
                          {/* title */}
                          <h4>سبد خرید(<span className="text-sm">1</span>)</h4>
                          {/* delete all basket btn */}
                          <button className="text-gray-800">
                              <IoTrashOutline className="w-6 h-6"/>
                          </button>
                      </div>
                      {/* discount wrapper */}
                      <div className="flex items-center justify-between py-3 border-y md:border-t-0 md:border-b border-gray-400">
                          {/* title */}
                          <h5 className="text-sm">تخفیف محصولات</h5>
                          {/* discount price */}
                          <span className="text-gray-700 text-sm">۶۳٬۰۰۰ تومان</span>
                      </div>
                      {/* shipping wrapper */}
                      <div className="py-3 border-b border-gray-400">
                          {/* top wrapper */}
                          <div className="flex items-center justify-between">
                              {/* title */}
                              <h5 className="text-sm">هزینه ارسال</h5>
                              {/* shipping price */}
                              <span className="text-gray-700 text-sm">۰ تومان</span>
                          </div>
                      </div>
                      {/* price wrapper */}
                      <div className="flex items-center justify-between py-3 ">
                          {/* title */}
                          <h5 className="text-sm">مبلغ قابل پرداخت</h5>
                          {/* sum of price */}
                          <span className="text-primary text-sm">۵۴۲٬۰۰۰ تومان</span>
                      </div>
                      <NavLink to='/payment' className="state__btn2 w-full text-white bg-primary flex-center gap-1 md:gap-2 rounded p-2 md:px-4 text-xs md:text-base md:font-estedadMedium">
                          <span className=" flex items-center gap-2">
                              <LuCreditCard className="w-4 md:w-6 h-4 md:h-6"/>
                          ثبت سفارش</span>
                      </NavLink>
            </div>
        </div>
    </section>
</div>
  )
}