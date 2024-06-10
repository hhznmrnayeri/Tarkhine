import React, { useState } from 'react'
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
export default function Calendar() {
    const [activeDay,setActiveDay]=useState('۱');
    const changeActiveDay=(e)=>{
        e.preventDefault()
        if(e.target.classList.contains('day__disable')){
            return
        }else{
            setActiveDay(e.target.innerHTML)
        }
        // console.log(e.target.innerHTML)
    }
return (
<div className="absolute w-full sm:w-72 lg:w-full left-0 top-full bg-white rounded-lg shadow-card p-4 text-sm flex flex-col font-estedadMedium z-30">
    {/* top wrapper */}
    <div className="flex items-center justify-between">
        {/* next btn */}
        <button className="text-primary rounded-full border border-primary w-6 h-6 flex-center">
            <GoChevronRight className="w-4 h-4"/>
        </button>
        {/* month value */}
        <span className="font-estedadBold">اردیبهشت ۱۴۰۲</span>
        {/* prev btn */}
        <button className="text-primary rounded-full border border-primary w-6 h-6 flex-center">
            <GoChevronLeft className="w-4 h-4"/>
        </button>
    </div>
    {/* day wrapper */}
    <div className="flex items-start justify-between text-gray-700 mt-4">
        {/* day box */}
        <div className="flex flex-col gap-2">
            <span>ش</span>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۶'?'day__active':''}`}>۶</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱۳'?'day__active':''}`}>۱۳</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲۰'?'day__active':''}`}>۲۰</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲۷'?'day__active':''}`}>۲۷</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar day__disable`}>۴</button>
        </div>
        {/* day box */}
        <div className="flex flex-col gap-2">
            <span>ی</span>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۵'?'day__active':''}`}>۵</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱۲'?'day__active':''}`}>۱۲</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱۹'?'day__active':''}`}>۱۹</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲۶'?'day__active':''}`}>۲۶</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar day__disable`}>۳</button>
        </div>
        {/* day box */}
        <div className="flex flex-col gap-2">
            <span>د</span>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۴'?'day__active':''}`}>۴</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱۱'?'day__active':''}`}>۱۱</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱۸'?'day__active':''}`}>۱۸</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲۵'?'day__active':''}`}>۲۵</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar day__disable`}>۲</button>
        </div>
        {/* day box */}
        <div className="flex flex-col gap-2">
            <span>س</span>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۳'?'day__active':''}`}>۳</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱۰'?'day__active':''}`}>۱۰</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱۷'?'day__active':''}`}>۱۷</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲۴'?'day__active':''}`}>۲۴</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar day__disable`}>۱</button>
        </div>
        {/* day box */}
        <div className="flex flex-col gap-2">
            <span>چ</span>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲'?'day__active':''}`}>۲</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۹'?'day__active':''}`}>۹</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱۶'?'day__active':''}`}>۱۶</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲۳'?'day__active':''}`}>۲۳</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۳۰'?'day__active':''}`}>۳۰</button>
        </div>
        {/* day box */}
        <div className="flex flex-col gap-2">
            <span>پ</span>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱'?'day__active':''}`}>۱</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۸'?'day__active':''}`}>۸</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱۵'?'day__active':''}`}>۱۵</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲۲'?'day__active':''}`}>۲۲</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲۹'?'day__active':''}`}>۲۹</button>
        </div>
        {/* day box */}
        <div className="flex flex-col gap-2">
            <span>ج</span>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar day__disable`}>۳۰</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۷'?'day__active':''}`}>۷</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۱۴'?'day__active':''}`}>۱۴</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲۱'?'day__active':''}`}>۲۱</button>
            <button onClick={(e)=>changeActiveDay(e)} className={`day__calendar ${activeDay==='۲۸'?'day__active':''}`}>۲۸</button>
        </div>
    </div>
</div>
)
}