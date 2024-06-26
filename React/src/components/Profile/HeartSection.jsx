import React, { useState } from 'react'
import FavoriteItem from './FavoriteItem'
import Empty from '../share/Empty'
import { IoMdCheckmark } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
export default function HeartSection() {
  const [favoriteArray]=useState([{img:'src/assets/images/menu/food11.webp', name:'پاستا سبزیجات', star:'4', price:'۱۵۰٬۰۰۰',}]);
  const [filteredArray]=useState([]);
  const [filterItemActive,setFilterItemActive]=useState('همه');
return (
<section>
    {favoriteArray.length
    ?<div className="flex flex-col items-start">
        {/* center wrapper */}
        <div className="flex items-center justify-between mt-2 md:mt-4 w-full gap-2 md:gap-4">
              {/* filter wrapper */}
              <div className="hidden lg:flex items-center gap-2 ">
                  <button onClick={()=>{setFilterItemActive('همه')}} className={`filter__item ${filterItemActive==='همه'?'filter__item--active':''} text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}>
                      <IoMdCheckmark className="tick__icon w-2.5 h-2.5"/>
                      <span>همه</span>
                      <GoChevronLeft className="arrow__icon w-3 md:w-4 h-3 md:h-4"/>
                  </button>
                  <button onClick={()=>{setFilterItemActive('غذای اصلی')}} className={`filter__item ${filterItemActive==='غذای اصلی'?'filter__item--active':''} text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}>
                      <IoMdCheckmark className="tick__icon w-2.5 h-2.5"/>
                      <span>غذای اصلی</span>
                      <GoChevronLeft className="arrow__icon w-3 md:w-4 h-3 md:h-4"/>
                  </button>
                  <button onClick={()=>{setFilterItemActive('پیش غذا')}} className={`filter__item ${filterItemActive==='پیش غذا'?'filter__item--active':''} text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}>
                      <IoMdCheckmark className="tick__icon w-2.5 h-2.5"/>
                      <span>پیش غذا</span>
                      <GoChevronLeft className="arrow__icon w-3 md:w-4 h-3 md:h-4"/>
                  </button>
                  <button onClick={()=>{setFilterItemActive('دسر')}} className={`filter__item ${filterItemActive==='دسر'?'filter__item--active':''} text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}>
                      <IoMdCheckmark className="tick__icon w-2.5 h-2.5"/>
                      <span>دسر</span>
                      <GoChevronLeft className="arrow__icon w-3 md:w-4 h-3 md:h-4"/>
                  </button>
                  <button onClick={()=>{setFilterItemActive('نوشیدنی')}} className={`filter__item ${filterItemActive==='نوشیدنی'?'filter__item--active':''} text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}>
                      <IoMdCheckmark className="tick__icon w-2.5 h-2.5"/>
                      <span>نوشیدنی</span>
                      <GoChevronLeft className="arrow__icon w-3 md:w-4 h-3 md:h-4"/>
                  </button>
              </div>
              {/* search wrapper */}
              <form className="flex items-center justify-between px-4 py-2 border border-gray-400 rounded w-full overflow-hidden flex-grow">
                  {/* search input */}
                  <input type="text" className="border-none outline-none text-2xs md:text-xs flex-grow" placeholder="جستجو"/>
                  {/* search btn */}
                  <button className="search__btn">
                      <RiSearchLine className="w-4 h-4 md:w-6 md:h-6"/>
                  </button>
              </form>
          </div>
          {/* bottom wrapper */}
          <div className="flex flex-col w-full">
              {/* undefined box */}
              {!filteredArray.length
              ?<div className="grid grid-cols-12 gap-x-4 gap-y-5 md:gap-y-6 mt-6 md:mt-11">
                  {favoriteArray.map((item,index)=>(<FavoriteItem key={index+1} {...item}/>))}
              </div>
              :<div className="flex-center flex-col gap-4 py-40">
                  {/* caption */}
                  <p className="text-xs md:text-xl">موردی با این مشخصات پیدا نکردیم!</p>
                  {/* img */}
                  <img src="src/assets/images/home/undefined.webp" alt="undefined" className="w-40 md:w-96"/>
              </div>
              }
          </div>
    </div>
    :<Empty href='/menu' caption='حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!' btn='منوی رستوران'/>
    }
</section>
)
}