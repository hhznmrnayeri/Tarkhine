import React, { useState } from 'react'
import AddressItem from '../share/AddressItem';
import Empty from '../share/Empty';
import Overlay from '../share/Overlay';
import { IoLocationOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { PiGpsFix } from "react-icons/pi";
export default function LocationSection() {
  const [addressArray,setAddressArray]=useState([{caption:'تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰', name:'محل کار', user:'سردار وظیفه', phone:'۰۹۱۴ ۸۶۴ ۳۳۵۰', active:true,}]);
  const [showLocationModal,setShowLocationModal]=useState(false);
  const [showAddressModal,setShowAddressModal]=useState(false);
  const [nameAddress,setNameAddress]=useState('');
  const [phoneAddress,setPhoneAddress]=useState('');
  const [captionAddress,setCaptionAddress]=useState('');
  const closeLocationModal=()=>{
      setShowLocationModal(false);
  }
  const openLocationModal=()=>{
      setShowLocationModal(true);
  }
  const closeAddressModal=()=>{
      setShowAddressModal(false);
      setShowLocationModal(false);
  }
  const openAddressModal=()=>{
      setShowAddressModal(true);
  }
  const addAddressItem=()=>{
      const newAddressObj={
          caption:captionAddress,
          name:nameAddress,
          user:'test',
          phone:phoneAddress,
          active:true
      }
      setAddressArray((prev)=>[...prev,newAddressObj]);
      setShowAddressModal(false);
      setShowLocationModal(false);
      setNameAddress('');
      setPhoneAddress('');
      setCaptionAddress('');
  }
return (
<>
<section>
    {addressArray.length
    ?<div className="mt-6 md:mt-4 w-full flex items-start justify-between flex-col xl:flex-row flex-wrap pt-4 gap-2 md:gap-4">
    {addressArray.map((item,index)=><AddressItem key={index+1} {...item}/>)}
    </div>
    :<Empty caption='شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!' btn=''/>
    }
    {/* add address btn */}
    <button onClick={openLocationModal} className="add__address text-primary border border-primary flex-center mt-6  text-xs rounded p-2 h-8 w-40 mx-auto">افزودن آدرس جدید</button>
</section>
{showLocationModal&&<Overlay onHide={closeLocationModal}>
<div className="fixed overflow-hidden rounded-lg bg-white w-full flex flex-col md:w-7/12 h-full md:h-3/4 inset-0 m-auto z-30">
        {/* top wrapper */}
        <div className="bg-gray-100 flex items-center justify-between py-4 px-6 text-sm font-estedadMedium md:text-2xl md:font-estedadSemiBold">
            <h3 className="mx-auto">افزودن آدرس</h3>
            <button onClick={closeLocationModal} className="close__location--modal text-gray-700">
                <IoMdClose className="w-6 h-6"/>
            </button>
        </div>
        {/* content */}
        <div className="bg-map bg-center bg-cover relative py-8 px-6 flex flex-col items-center justify-between flex-grow">
            {/* top wrapper */}
            <div className="flex items-start justify-between text-primary w-full">
                {/* gps btn */}
                <button className="bg-white flex items-center gap-1 p-2 md:px-6 text-xs md:text-base md:font-estedadMedium">
                    <PiGpsFix className="w-4 h-4 md:w-6 md:h-6"/>موقعیت من
                </button>
                {/* zoom wrapper */}
                <div className="flex flex-col gap-2">
                    {/* zoom in btn */}
                    <button className="flex-center bg-white w-8 md:w-10 h-8 md:h-10 rounded">+</button>
                    {/* zoom out btn */}
                    <button className="flex-center bg-white w-8 md:w-10 h-8 md:h-10 rounded">-</button>
                </div>
            </div>
            {/* bottom wrapper */}
            <div className="flex flex-col items-center gap-3 md:gap-6">
                {/* address text */}
                <p className="bg-white flex items-center gap-1 p-2 shadow-card rounded text-xs md:text-sm w-full md:w-96 mx-auto"><IoLocationOutline className="w-4 h-4 md:w-6 md:h-6"/>ولیعصر، خیابان بزرگمهر، کوچه نسیم</p>
                {/* submit btn */}
                <button onClick={openAddressModal} className="bg-primary text-white text-xs md:text-base md:font-estedadMedium flex-center p-2 md:px-4 rounded w-64">ثبت موقعیت</button>
            </div>
        </div>
    </div>
</Overlay>}
{showAddressModal&&<Overlay onHide={closeAddressModal}>
<div className="fixed overflow-hidden rounded-lg bg-white w-full flex flex-col md:w-7/12 h-full md:h-5/6 inset-0 m-auto z-30">
        {/* top wrapper */}
        <div className="bg-gray-100 flex items-center justify-between py-4 px-6 text-sm font-estedadMedium md:text-2xl md:font-estedadSemiBold">
            <h3 className="mx-auto">ثبت آدرس</h3>
            <button onClick={closeAddressModal} className="text-gray-700">
                <IoMdClose className="w-6 h-6"/>
            </button>
        </div>
        <img src="../src/assets/images/buy/map.webp" alt="map" className="md:hidden h-60"/>
        {/* form address */}
        <form className="flex flex-col mt-3 md:mt-6 text-xs md:text-sm px-6">
            {/* address name */}
            <input type="text" className="w-full outline-none border border-gray-400 rounded p-2" placeholder="عنوان آدرس" value={nameAddress} onChange={e=>setNameAddress(e.target.value)}/>
            {/* checkbox input */}
            <div className="flex items-center gap-1 mt-3 md:mt-4">
                <input type="checkbox" name="address"/>
                <label htmlFor="address">تحویل گیرنده خودم هستم.</label>
            </div>
            {/* phone */}
            <input type="text" className="w-full outline-none border border-gray-400 rounded p-2 mt-2" placeholder="شماره همراه" value={phoneAddress} onChange={e=>setPhoneAddress(e.target.value)}/>
            {/* address text */}
            <input type="text" className="w-full outline-none border border-gray-400 rounded px-2 mt-3 md:mt-4 pt-2 pb-24 md:pb-44 align-top" placeholder="آدرس دقیق شما" value={captionAddress} onChange={e=>setCaptionAddress(e.target.value)}/>
            {/* btn wrapper */}
            <div className="flex items-center gap-6 mt-6 md:mt-4">
                {/* close */}
                <button onClick={closeAddressModal} className="text-primary flex-1">انصراف</button>
                {/* submit address */}
                <button onClick={addAddressItem} className="text-white bg-primary flex-1 flex-center rounded p-2">ثبت آدرس</button>
            </div>
        </form>
    </div>
</Overlay>}
</>
)
}