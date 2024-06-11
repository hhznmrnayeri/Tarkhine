import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { LiaClipboardListSolid } from "react-icons/lia";
import { HiOutlineChevronDown } from "react-icons/hi";
import { MdOutlineAddHome } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiPhoneCall } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LiaUserSolid } from "react-icons/lia";
import { TbWallet } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import Overlay from './Overlay';
export default function Nav(props) {
    const [showMobileMenu,setShowMobileMenu]=useState(false);
    const closeMenu=()=>{
        setShowMobileMenu(false);
    }
    const openMenu=()=>{
        setShowMobileMenu(true);
    }
return (
    <>
        <nav className={`${props.shadow?'shadow-menu':''}`}>
            <div className="container">
                <div className="py-4 md:py-8 flex items-center justify-between">
                    {/* mobile menu btn */}
                    <button className="md:hidden text-primary" onClick={openMenu}>
                        {/* mobile menu icon */}
                        <IoMenuOutline className="w-6 h-6"/>
                    </button>
                    {/* logo */}
                    <NavLink to='/'>
                        <img src="src/assets/images/home/Logo.webp" alt="logo"/>
                    </NavLink>
                    {/* nav menu */}
                    <ul className="text-gray-700 lg:text-xl hidden md:flex items-center gap-2 md:gap-1 lg:gap-6 ">
                        {/* nav item */}
                        <li className={props.title==='home'?'nav__item--active':''}>
                            {/* nav link */}
                            <NavLink to='/' className={link=>link.isActive?'text-primary font-estedadBold':''}>صفحه اصلی</NavLink>
                        </li>
                        {/* nav item */}
                        <li className={`flex items-center gap-1 relative py-3 group ${props.title==='branch'?'nav__item--active':''}`}>
                            {/* nav link */}
                            <NavLink to='/branch' className={link=>link.isActive?'text-primary font-estedadBold':''}>شعبه</NavLink>
                            {/* nav submenu icon */}
                            <HiOutlineChevronDown className="w-4 h-4"/>
                            {/* sub menu */}
                            <ul className="bg-white rounded p-2 flex flex-col items-start child:w-full gap-2 text-sm absolute left-0 -bottom-3 shadow-subMenu top-full h-max w-36 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-30">
                                {/* sub menu item */}
                                    <NavLink to='/branch'>اکباتان</NavLink>
                                    <hr/>
                                {/* sub menu item */}
                                    <NavLink to='/branch'>چالوس</NavLink>
                                    <hr/>
                                {/* sub menu item */}
                                    <NavLink to='/branch'>اقدسیه</NavLink>
                                    <hr/>
                                {/* sub menu item */}
                                    <NavLink to='/branch'>ونک</NavLink>
                            </ul>
                        </li>
                        {/* nav item */}
                        <li className={`flex items-center gap-1 relative py-3 group ${props.title==='menu'?'nav__item--active':''}`}>
                            {/* nav link */}
                            <NavLink to='/menu' className={link=>link.isActive?'text-primary font-estedadBold':''}>منو</NavLink>
                            {/* nav submenu icon */}
                            <HiOutlineChevronDown className="w-4 h-4"/>
                            {/* sub menu */}
                            <ul className="bg-white rounded p-2 flex flex-col items-start child:w-full gap-2 text-sm absolute right-0 -bottom-3 shadow-subMenu top-full h-max w-36 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-30">
                                {/* sub menu item */}
                                    <NavLink to='/menu'>غذای اصلی</NavLink>
                                    <hr/>
                                {/* sub menu item */}
                                    <NavLink to='/menu'>پیش غذا</NavLink>
                                    <hr/>
                                {/* sub menu item */}
                                    <NavLink to='/menu'>دسر</NavLink>
                                    <hr/>
                                {/* sub menu item */}
                                    <NavLink to='/menu'>نوشیدنی</NavLink>
                            </ul>
                        </li>
                        {/* nav item */}
                        <li className={`${props.title==='representation'?'nav__item--active':''}`}>
                            {/* nav link */}
                            <NavLink to="/representation" className={link=>link.isActive?'text-primary font-estedadBold':''}>اعطای نمایندگی</NavLink>
                        </li>
                        {/* nav item */}
                        <li className={`${props.title==='about'?'nav__item--active text-primary font-estedadBold':''}`}>
                            {/* nav link */}
                            <NavLink to="/about" className={link=>link.isActive?'text-primary font-estedadBold':''}>درباره ما</NavLink>
                        </li>
                        {/* nav item */}
                        <li className={`${props.title==='contact'?'nav__item--active':''}`}>
                            {/* nav link */}
                            <NavLink to="/contact" className={link=>link.isActive?'text-primary font-estedadBold':''}>تماس با ما</NavLink>
                        </li>
                    </ul>
                    {/* nav icon wrapper */}
                    <div className="flex items-center gap-1 lg:gap-2 text-primary">
                        {/* nav icon item */}
                        <NavLink to='/search' className={`hidden md:flex-center rounded p-2 ${props.title==='search'?'nav__icon--active':'bg-tint-100'}`}>
                            <RiSearchLine className="w-4 h-4 md:w-6 md:h-6"/>
                        </NavLink>
                        {/* nav icon item */}
                        <NavLink to='/buy' className={`flex-center rounded p-2 ${props.title==='buy'?'nav__icon--active':'bg-tint-100'}`}>
                            <MdOutlineShoppingCart className="w-4 h-4 md:w-6 md:h-6"/>
                        </NavLink>
                        {/* nav icon item */}
                        <div className={`flex items-end  rounded p-2 relative group w-8 md:w-10 h-8 md:h-10 ${props.title==='profile'?'nav__icon--active':'bg-tint-100'}`}>
                            <NavLink to='/profile' className='absolute w-full h-full inset-0 flex-center'>
                                <LiaUserSolid className="w-4 h-4 md:w-6 md:h-6"/>
                                <HiOutlineChevronDown className="w-4 h-4 hidden"/>
                            </NavLink>
                                {/* sub menu */}
                            <ul className="bg-white text-gray-800 rounded p-2 hidden flex-col items-start child:w-full gap-2 text-sm absolute left-0 -bottom-3 shadow-subMenu top-full h-min w-36 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-30">
                                    {/* sub menu item */}
                                        <NavLink to='/profile' className="flex items-center gap-1"><LiaUserSolid className="w-4 h-4"/>پروفایل</NavLink>
                                        <hr/>
                                    {/* sub menu item */}
                                        <NavLink to='/profile' className="flex items-center gap-1"><TbWallet className="w-4 h-4"/>پیگیری سفارش</NavLink>
                                        <hr/>
                                    {/* sub menu item */}
                                        <NavLink to='/profile' className="flex items-center gap-1"><IoMdHeartEmpty className="w-4 h-4"/>علاقه‌مندی‌ها</NavLink>
                                        <hr/>
                                    {/* sub menu item */}
                                        <NavLink to='/profile' className="flex items-center gap-1"><IoLocationOutline className="w-4 h-4"/>آدرس‌های من</NavLink>
                                        <hr/>
                                    {/* sub menu item */}
                                        <NavLink to='/profile' className="flex items-center gap-1"><TbLogout2 className="w-4 h-4"/>خروج از حساب</NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {showMobileMenu&&<Overlay onHide={closeMenu}>
            {/* mobile menu  */}
            <div className={`fixed bg-white top-0 bottom-0 w-64 z-30 md:hidden transition-all duration-300 ${showMobileMenu?'right-0':'-right-64'}`}>
                {/* top box */}
                <div className="bg-mobileMenu h-24 bg-cover p-4 flex items-start justify-between text-white">
                    {/* logo */}
                    <NavLink to='/' className="my-4">
                        <img src="src/assets/images/home/Logo2.webp" alt="logo"/>
                    </NavLink>
                    {/* close menu btn */}
                    <button onClick={closeMenu}>
                        <IoMdClose className='w-4 h-4'/>
                    </button>
                </div>
                {/* menu list */}
                <ul className="px-4 flex flex-col items-start child:w-full divide-y text-2xs child:py-2">
                    {/* menu item */}
                    <li>
                        {/* menu link */}
                        <NavLink to='/' className={link=>link.isActive?"flex items-center gap-1 text-primary text-xs child:w-4 child:h-4": "flex items-center gap-1"}>
                            <AiOutlineHome className="w-3 h-3"/>صفحه اصلی
                        </NavLink>
                    </li>
                    {/* menu item */}
                    <li className="flex items-center justify-between">
                        {/* menu link */}
                        <NavLink to='/menu' className={link=>link.isActive?"flex items-center gap-1 text-primary text-xs child:w-4 child:h-4": "flex items-center gap-1"}>
                            <LiaClipboardListSolid className="w-3 h-3"/>منو
                        </NavLink>
                        <HiOutlineChevronDown className="w-4 h-4"/>
                    </li>
                    {/* menu item */}
                    <li className="flex items-center justify-between ">
                        {/* menu link */}
                        <NavLink to='/branch' className={link=>link.isActive?"flex items-center gap-1 text-primary text-xs child:w-4 child:h-4": "flex items-center gap-1"}>
                            <MdOutlineAddHome className="w-3 h-3"/>شعبه
                        </NavLink>
                        <HiOutlineChevronDown className="w-4 h-4"/>
                    </li>
                    {/* menu item */}
                    <li>
                        {/* menu link */}
                        <NavLink to='/about' className={link=>link.isActive?"flex items-center gap-1 text-primary text-xs child:w-4 child:h-4": "flex items-center gap-1"}>
                            <HiOutlineUsers className="w-3 h-3"/>درباره ما
                        </NavLink>
                    </li>
                    {/* menu item */}
                    <li>
                        {/* menu link */}
                        <NavLink to='/contact' className={link=>link.isActive?"flex items-center gap-1 text-primary text-xs child:w-4 child:h-4": "flex items-center gap-1"}>
                            <PiPhoneCall className="w-3 h-3"/>تماس با ما
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Overlay>}
    </>
)
}