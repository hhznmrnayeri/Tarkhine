import React, { useEffect, useState } from "react";
import UserSection from "./UserSection";
import WalletSection from "./WalletSection";
import HeartSection from "./HeartSection";
import LocationSection from "./LocationSection";
import { NavLink } from "react-router-dom";
import Overlay from "../components/Overlay";
import BaseUrl from "../components/BaseUrl";
import ArrowRightIcon from "../../assets/svg/ArrowRightIcon";
import CloseIcon from "../../assets/svg/CloseIcon";
import HeartEmptyIcon from "../../assets/svg/HeartEmptyIcon";
import HeartFillIcon from "../../assets/svg/HeartFillIcon";
import UserEmptyIcon from "../../assets/svg/UserEmptyIcon";
import UserFillIcon from "../../assets/svg/UserFillIcon";
import WalletEmptyIcon from "../../assets/svg/WalletEmptyIcon";
import WalletFillIcon from "../../assets/svg/WalletFillIcon";
import LocationEmptyIcon from "../../assets/svg/LocationEmptyIcon";
import LocationFillIcon from "../../assets/svg/LocationFillIcon";
import LogoutIcon from "../../assets/svg/LogoutIcon";
export default function Aside() {
  const [userInfo, setUserInfo] = useState({});
  const [menuItemActive, setMenuItemActive] = useState("user");
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [favoriteArray, setFavoriteArray] = useState([]);
  const [topicArray, setTopicArray] = useState([]);
  const getTopics = () => {
    fetch(`${BaseUrl}/topics`)
      .then((res) => res.json())
      .then((data) => setTopicArray(data));
  };
  const getFavorites = () => {
    setFavoriteArray([]);
    fetch(`${BaseUrl}/foods`)
      .then((res) => res.json())
      .then((data) =>
        data.forEach((item) => {
          if (item.isFavorite) {
            setFavoriteArray((prev) => [...prev, item]);
          }
        })
      );
  };
  function getUserInfo() {
    fetch(`${BaseUrl}/users/1`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }
  const openAsideMenu = () => {
    setShowMenu(true);
  };
  const closeAsideMenu = () => {
    setShowMenu(false);
  };
  const openLogoutModal = () => {
    setShowLogoutModal(true);
  };
  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };
  useEffect(() => {
    getUserInfo();
    getFavorites();
    getTopics();
  }, []);
  return (
    <>
      <div className="container">
        {/* section wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-6 md:my-12">
          {/* state wrapper */}
          <div
            className={`top-20 bottom-0 ${
              showMenu ? "left-0" : "left-full"
            } z-10 fixed md:static bg-white w-full h-full md:h-80 px-5  md:col-span-3 md:flex flex-col md:border border-gray-400 md:px-2 md:py-4 md:rounded-lg transition-all duration-300`}
          >
            {/* top wrapper */}
            <div className="flex items-center md:items-end gap-2 xl:gap-5 pb-2 border-b border-gray-600">
              {/* img */}
              {userInfo.photo ? (
                <img
                  src={`${userInfo.photo}`}
                  alt="user"
                  className="w-12 h-12 lg:w-20 lg:h-20 rounded-full"
                />
              ) : (
                <img
                  src="src/assets/images/profile/Ellipse.webp"
                  alt="user"
                  className="w-12 h-12 lg:w-20 lg:h-20"
                />
              )}
              {/* user content */}
              <div className="flex flex-col items-start self-center">
                {/* user name */}
                <h4 className="user__name text-sm lg:text-base">
                  {userInfo.username}
                </h4>
                {/* user phone */}
                <h5 className="text-gray-700 text-2xs lg:text-xs" dir="ltr">
                  0{userInfo.phoneNumber}
                </h5>
              </div>
            </div>
            {/* state menu */}
            <ul className="flex flex-col pr-2 gap-1 text-xs md:text-sm mt-2">
              {/* state item */}
              <button
                onClick={() => {
                  setMenuItemActive("user");
                  closeAsideMenu();
                }}
                className={`${
                  menuItemActive === "user" ? "profile__state--active" : ""
                } flex items-center gap-1 py-2.5 md:py-1.5`}
              >
                {/* state icon */}
                <UserEmptyIcon size="w-4 h-4 icon__empty" />
                {/* state icon */}
                <UserFillIcon size="w-4 h-4 icon__fill" />
                {/* state title */}
                <h6>پروفایل</h6>
              </button>
              {/* state item */}
              <button
                onClick={() => {
                  setMenuItemActive("wallet");
                  closeAsideMenu();
                }}
                className={`${
                  menuItemActive === "wallet" ? "profile__state--active" : ""
                } flex items-center gap-1 py-2.5 md:py-1.5`}
              >
                {/* state icon */}
                <WalletEmptyIcon size="w-4 h-4 icon__empty" />
                {/* state icon */}
                <WalletFillIcon size="w-4 h-4 icon__fill" />
                {/* state title */}
                <h6>پیگیری سفارشات</h6>
              </button>
              {/* state item */}
              <button
                onClick={() => {
                  setMenuItemActive("heart");
                  closeAsideMenu();
                }}
                className={`${
                  menuItemActive === "heart" ? "profile__state--active" : ""
                } flex items-center gap-1 py-2.5 md:py-1.5`}
              >
                {/* state icon */}
                <HeartEmptyIcon size="w-4 h-4 icon__empty" />
                {/* state icon */}
                <HeartFillIcon size="w-4 h-4 icon__fill" />
                {/* state title */}
                <h6>علاقمندی‌ها</h6>
              </button>
              {/* state item */}
              <button
                onClick={() => {
                  setMenuItemActive("location");
                  closeAsideMenu();
                }}
                className={`${
                  menuItemActive === "location" ? "profile__state--active" : ""
                } flex items-center gap-1 py-2.5 md:py-1.5`}
              >
                {/* state icon */}
                <LocationEmptyIcon size="w-4 h-4 icon__empty" />
                {/* state icon */}
                <LocationFillIcon size="w-4 h-4 icon__fill" />
                {/* state title */}
                <h6>آدرس‌های من</h6>
              </button>
              {/* state item */}
              <button
                onClick={openLogoutModal}
                className="text-error flex items-center gap-1 py-2.5 md:py-1.5"
              >
                {/* state icon */}
                <LogoutIcon size="w-4 h-4" />
                {/* state title */}
                <h6>خروج</h6>
              </button>
            </ul>
          </div>
          {/* section wrapper */}
          <div className="col-span-1 md:col-span-9 flex flex-col overflow-hidden">
            <div className="md:border md:border-gray-400 md:rounded-lg md:p-6 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between md:justify-start md:pb-2 md:border-b border-gray-400 w-full">
                <button onClick={openAsideMenu} className="md:hidden">
                  <ArrowRightIcon size="w-4 h-4" />
                </button>
                <h2 className="md:text-xl font-estedadBold mx-auto md:mr-0">
                  {menuItemActive === "user" ? "پروفایل من" : ""}
                  {menuItemActive === "wallet" ? "سفارشات" : ""}
                  {menuItemActive === "heart" ? "علاقمندی‌ها" : ""}
                  {menuItemActive === "location" ? "آدرس‌ها" : ""}
                </h2>
              </div>
              {menuItemActive === "user" && <UserSection userInfo={userInfo} />}
              {menuItemActive === "wallet" && <WalletSection />}
              {menuItemActive === "heart" && (
                <HeartSection
                  favoriteArray={favoriteArray}
                  setFavoriteArray={setFavoriteArray}
                  topicArray={topicArray}
                  getFavorites={getFavorites}
                />
              )}
              {menuItemActive === "location" && <LocationSection />}
            </div>
          </div>
        </div>
      </div>
      {showLogoutModal && (
        <Overlay onHide={closeLogoutModal}>
          <div className="fixed overflow-hidden rounded-lg bg-white w-11/12 md:w-5/12 h-48 md:h-56 inset-0 m-auto z-30">
            {/* top wrapper */}
            <div className="bg-gray-100 flex items-center justify-between py-4 px-6 text-sm font-estedadMedium md:text-2xl md:font-estedadSemiBold">
              <h3 className="mx-auto">خروج</h3>
              <button onClick={closeLogoutModal} className="text-gray-700">
                <CloseIcon size="w-6 h-6" />
              </button>
            </div>
            {/* caption */}
            <p className="mt-3 md:mt-8 text-xs md:text-base text-center">
              آیا مایل به خروج از حساب کاربری خود هستید؟
            </p>
            {/* btn wrapper */}
            <div className="mt-8 flex-center gap-4 md:gap-5 px-10">
              {/* back btn */}
              <button
                onClick={closeLogoutModal}
                className="bg-primary rounded flex-center p-2 text-white text-xs md:px-4 md:text-base md:font-estedadMedium flex-1"
              >
                بازگشت
              </button>
              {/* delete btn */}
              <NavLink
                to="/"
                className="bg-error-200 rounded flex-center p-2 text-error text-xs md:px-4 md:text-base md:font-estedadMedium flex-1"
              >
                خروج
              </NavLink>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
}
