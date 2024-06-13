import React, { useState } from 'react'
import Calendar from '../share/Calendar';
import { BiEditAlt } from "react-icons/bi";
import Overlay from '../share/Overlay';
export default function UserSection() {
  const [isShowEditBox,setIsShowEditBox]=useState(false);
  const [showCalendar,setShowCalendar]=useState(false);
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [date,setDate]=useState('');
  const [userName,setUserName]=useState('');
  const openEditBox=()=>{
    setIsShowEditBox(true);
  }
  const closeEditBox=(e)=>{
    e.preventDefault()
    setIsShowEditBox(false);
  }
  const editHandler=(e)=>{
    e.preventDefault()
    setIsShowEditBox(false);
  }
  const closeCalendar=()=>{
      setShowCalendar(false)
  }
  const openCalendar=()=>{
      setShowCalendar(true)
  }
return (
  <>
  <section>
    {isShowEditBox
    ?<div className="flex flex-col items-start">
    {/* bottom wrapper */}
    <form className="flex flex-col gap-3 md:gap-6 mt-6 md:mt-12 w-full pb-60">
        {/* detail wrapper */}
        <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
            {/* detail item */}
            <div className="relative w-full h-10">
                <input className="profile__edit--input peer" placeholder=" " value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                <label className="profile__edit--label">نام</label>
            </div>
            {/* detail item */}
            <div className="relative w-full h-10">
                <input className="profile__edit--input peer" placeholder=" " value={lastName} onChange={e=>setLastName(e.target.value)}/>
                <label className="profile__edit--label">نام خانوادگی</label>
            </div>
        </div>
        {/* detail wrapper */}
        <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
            {/* detail item */}
            <div className="relative w-full h-10">
                <input className="profile__edit--input peer" dir="ltr" placeholder=" " value={email} onChange={e=>setEmail(e.target.value)}/>
                <label className="profile__edit--label">آدرس ایمیل</label>
            </div>
            {/* detail item */}
            <div className="relative w-full h-10">
                <input className="profile__edit--input peer" dir="ltr" placeholder=" " value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
                <label className="profile__edit--label">شماره همراه</label>
            </div>
        </div>
        {/* detail wrapper */}
        <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
            {/* input wrapper */}
            <div className="calendar__wrapper group relative w-full flex flex-col h-10" onClick={openCalendar} tabIndex="1">
                {/* input */}
                <input className="profile__edit--input peer" dir="ltr" placeholder=" " value={date} onChange={e=>setDate(e.target.value)}/>
                <label className="profile__edit--label">تاریخ تولد (اختیاری)</label>
                {showCalendar&&<Calendar/>}
            </div>
            {/* detail item */}
            <div className="relative w-full h-10">
                <input className="profile__edit--input peer" placeholder=" " value={userName} onChange={e=>setUserName(e.target.value)}/>
                <label className="profile__edit--label">نام نمایشی</label>
            </div>
        </div>
        {/* btn wrapper */}
        <div className="flex items-center md:justify-end gap-4">
            {/* cancel btn */}
            <button onClick={closeEditBox} className="text-primary bg-white border border-primary text-xs rounded flex-center md:text-base md:font-estedadMedium h-8 md:h-10 w-full md:w-36">انصراف</button>
            {/* submit btn */}
            <button onClick={editHandler} className="bg-primary text-white text-xs rounded flex-center md:text-base md:font-estedadMedium h-8 md:h-10 w-full md:w-36">ذخیره اطلاعات</button>
        </div>
    </form>
</div>
    :<div className="flex flex-col gap-3 md:gap-6 mt-6 md:mt-12 w-full">
        {/* detail wrapper */}
        <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
            {/* detail item */}
            <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg">{firstName.length?firstName:'نام'}</span>
            {/* detail item */}
            <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg">{lastName.length?lastName:'نام خانوادگی'}</span>
        </div>
        {/* detail wrapper */}
        <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
            {/* detail item */}
            <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg">{email.length?email:'آدرس ایمیل'}</span>
            {/* detail item */}
            <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg" dir={phoneNumber.length?'ltr':'rtl'}>{phoneNumber.length?phoneNumber:'شماره همراه'}</span>
        </div>
        {/* detail wrapper */}
        <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
            {/* detail item */}
            <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg">{date.length?date:`تاریخ تولد${<span className="text-2xs">(اختیاری)</span>} `}</span>
            {/* detail item */}
            <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg">{userName.length?userName:'نام نمایشی'}</span>
        </div>
        {/* edit btn */}
        <button onClick={openEditBox} className="flex-center gap-1 md:gap-2 text-primary text-xs border border-primary rounded p-2 self-center mx-auto h-8 w-40 md:h-10 md:w-72 md:text-base md:font-estedadMedium mt-2 md:py-2 md:px-4">
            <BiEditAlt className="w-4 h-4 md:w-6 md:h-6"/>ویرایش اطلاعات شخصی
        </button>
    </div>
    }
</section>
{showCalendar&&<Overlay onHide={closeCalendar} backgroundNone={true}></Overlay>}
  </>
)
}