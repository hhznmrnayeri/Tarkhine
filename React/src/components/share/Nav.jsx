import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";
import Overlay from "./Overlay";
export default function Nav(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [listItems] = useState([
    {
      type: "text",
      title: "home",
      name: "صفحه اصلی",
      icon: null,
      submenu: [],
      href: "",
    },
    {
      type: "text",
      title: "branch",
      name: "شعبه",
      icon: null,
      submenu: [
        { name: "اکباتان" },
        { name: "چالوس" },
        { name: "اقدسیه" },
        { name: "ونک" },
      ],
      href: "branch",
    },
    {
      type: "text",
      title: "menu",
      name: "منو",
      icon: null,
      submenu: [
        { name: "غذای اصلی" },
        { name: "پیش غذا" },
        { name: "دسر" },
        { name: "نوشیدنی" },
      ],
      href: "menu",
    },
    {
      type: "text",
      title: "representation",
      name: "اعطای نمایندگی",
      icon: null,
      submenu: [],
      href: "representation",
    },
    {
      type: "text",
      title: "about",
      name: "درباره ما",
      icon: null,
      submenu: [],
      href: "about",
    },
    {
      type: "text",
      title: "contact",
      name: "تماس با ما",
      icon: null,
      submenu: [],
      href: "contact",
    },
    {
      type: "icon",
      title: "search",
      name: "null",
      icon: <RiSearchLine />,
      submenu: [],
      href: "search",
    },
    {
      type: "icon",
      title: "buy",
      name: "null",
      icon: <MdOutlineShoppingCart />,
      submenu: [],
      href: "buy",
    },
    {
      type: "icon",
      title: "profile",
      name: "null",
      icon: <LiaUserSolid />,
      submenu: [
        { name: "پروفایل", icon: <LiaUserSolid /> },
        { name: "پیگیری سفارش", icon: <TbWallet /> },
        { name: "علاقه‌مندی‌ها", icon: <IoMdHeartEmpty /> },
        { name: "آدرس‌های من", icon: <IoLocationOutline /> },
        { name: "خروج از حساب", icon: <TbLogout2 /> },
      ],
      href: "profile",
    },
    {
      type: "mobile",
      title: "",
      name: "صفحه اصلی",
      icon: <AiOutlineHome />,
      submenu: [],
      href: "",
    },
    {
      type: "mobile",
      title: "",
      name: "منو",
      icon: <LiaClipboardListSolid />,
      submenu: [
        { name: "غذای اصلی" },
        { name: "پیش غذا" },
        { name: "دسر" },
        { name: "نوشیدنی" },
      ],
      href: "menu",
    },
    {
      type: "mobile",
      title: "",
      name: "شعبه",
      icon: <MdOutlineAddHome />,
      submenu: [
        { name: "اکباتان" },
        { name: "چالوس" },
        { name: "اقدسیه" },
        { name: "ونک" },
      ],
      href: "branch",
    },
    {
      type: "mobile",
      title: "",
      name: "درباره ما",
      icon: <HiOutlineUsers />,
      submenu: [],
      href: "about",
    },
    {
      type: "mobile",
      title: "",
      name: "تماس با ما",
      icon: <PiPhoneCall />,
      submenu: [],
      href: "contact",
    },
  ]);
  const closeMenu = () => {
    setShowMobileMenu(false);
  };
  const openMenu = () => {
    setShowMobileMenu(true);
  };
  return (
    <>
      <nav className={`${props.shadow ? "shadow-menu" : ""}`}>
        <div className="container">
          <div className="py-4 md:py-8 flex items-center justify-between">
            {/* mobile menu btn */}
            <button className="md:hidden text-primary" onClick={openMenu}>
              {/* mobile menu icon */}
              <IoMenuOutline className="w-6 h-6" />
            </button>
            {/* logo */}
            <NavLink to="/">
              <img src="../src/assets/images/home/Logo.webp" alt="logo" />
            </NavLink>
            {/* nav menu */}
            <ul className="text-gray-700 lg:text-xl hidden md:flex items-center gap-2 md:gap-1 lg:gap-6 ">
              {listItems.map(
                (item, index) =>
                  item.type === "text" &&
                  (item.submenu.length ? (
                    <li
                      key={index}
                      className={`flex items-center gap-1 relative py-3 group ${
                        props.title === item.title ? "nav__item--active" : ""
                      }`}
                    >
                      {/* nav link */}
                      <NavLink
                        to={`/${item.href}`}
                        className={(link) =>
                          link.isActive ? "text-primary font-estedadBold" : ""
                        }
                      >
                        {item.name}
                      </NavLink>
                      {/* nav submenu icon */}
                      <HiOutlineChevronDown className="w-4 h-4" />
                      {/* sub menu */}
                      <ul className="bg-white rounded p-2 flex flex-col items-start child:w-full gap-2 text-sm absolute left-0 -bottom-3 shadow-subMenu top-full h-max w-36 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-30">
                        {item.submenu.map((sub, index) => (
                          <div key={index} className="flex flex-col gap-2">
                            <NavLink to={`/${item.href}`}>{sub.name}</NavLink>
                            {index !== item.submenu.length - 1 ? <hr /> : null}
                          </div>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li
                      key={index}
                      className={
                        props.title === item.title
                          ? `${
                              props.title === "about"
                                ? "nav__item--active text-primary font-estedadBold"
                                : "nav__item--active"
                            }`
                          : ""
                      }
                    >
                      {/* nav link */}
                      <NavLink
                        to={`/${item.href}`}
                        className={(link) =>
                          link.isActive ? "text-primary font-estedadBold" : ""
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))
              )}
            </ul>
            {/* nav icon wrapper */}
            <div className="flex items-center gap-1 lg:gap-2 text-primary">
              {listItems.map(
                (item, index) =>
                  item.type === "icon" &&
                  (item.submenu.length ? (
                    <div
                      key={index}
                      className={`flex items-end  rounded p-2 relative group w-8 md:w-10 h-8 md:h-10 ${
                        props.title === item.title
                          ? "nav__icon--active"
                          : "bg-tint-100"
                      }`}
                    >
                      <NavLink
                        to={`/${item.href}`}
                        className="absolute w-full h-full inset-0 flex-center child:w-4 child:h-4 child:md:w-6 child:md:h-6"
                      >
                        {item.icon}
                        <HiOutlineChevronDown className="w-4 h-4 hidden" />
                      </NavLink>
                      {/* sub menu */}
                      <ul className="bg-white text-gray-800 rounded p-2 hidden flex-col items-start child:w-full gap-2 text-sm absolute left-0 -bottom-3 shadow-subMenu top-full h-min w-36 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-30">
                        {/* sub menu item */}
                        {item.submenu.map((sub, index) => (
                          <div key={index} className="flex flex-col gap-2">
                            <NavLink
                              to={`/${item.href}`}
                              className="flex items-center gap-1 child:w-4 child:h-4"
                            >
                              {sub.icon}
                              {sub.name}
                            </NavLink>
                            {index !== item.submenu.length - 1 ? <hr /> : null}
                          </div>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <NavLink
                      key={index}
                      to={`/${item.href}`}
                      className={`${
                        item.title === "search"
                          ? "hidden md:flex-center"
                          : "flex-center"
                      } rounded p-2 ${
                        props.title === item.title
                          ? "nav__icon--active child:w-4 child:h-4 child:md:w-6 child:md:h-6"
                          : "bg-tint-100 child:w-4 child:h-4 child:md:w-6 child:md:h-6"
                      }`}
                    >
                      {item.icon}
                    </NavLink>
                  ))
              )}
            </div>
          </div>
        </div>
      </nav>
      {showMobileMenu && (
        <Overlay onHide={closeMenu}>
          {/* mobile menu  */}
          <div
            className={`fixed bg-white top-0 bottom-0 w-64 z-30 md:hidden transition-all duration-300 ${
              showMobileMenu ? "right-0" : "-right-64"
            }`}
          >
            {/* top box */}
            <div className="bg-mobileMenu h-24 bg-cover p-4 flex items-start justify-between text-white">
              {/* logo */}
              <NavLink to="/" className="my-4">
                <img src="src/assets/images/home/Logo2.webp" alt="logo" />
              </NavLink>
              {/* close menu btn */}
              <button onClick={closeMenu}>
                <IoMdClose className="w-4 h-4" />
              </button>
            </div>
            {/* menu list */}
            <ul className="px-4 flex flex-col items-start child:w-full divide-y text-2xs child:py-2">
              {listItems.map(
                (item, index) =>
                  item.type === "mobile" &&
                  (item.submenu.length ? (
                    <li
                      className="flex items-center justify-between"
                      key={index}
                    >
                      <NavLink
                        to={`/${item.href}`}
                        className={(link) =>
                          link.isActive
                            ? "flex items-center gap-1 text-primary text-xs child:w-4 child:h-4"
                            : "flex items-center gap-1 child:w-3 child:h-3"
                        }
                      >
                        {item.icon}
                        {item.name}
                      </NavLink>
                      <HiOutlineChevronDown className="w-4 h-4" />
                    </li>
                  ) : (
                    <li key={index}>
                      <NavLink
                        to={`/${item.href}`}
                        className={(link) =>
                          link.isActive
                            ? "flex items-center gap-1 text-primary text-xs child:w-4 child:h-4"
                            : "flex items-center gap-1 child:w-3 child:h-3"
                        }
                      >
                        {item.icon}
                        {item.name}
                      </NavLink>
                    </li>
                  ))
              )}
            </ul>
          </div>
        </Overlay>
      )}
    </>
  );
}
