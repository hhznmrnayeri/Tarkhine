import React, { useEffect, useState } from "react";
import Empty from "../components/Empty";
import AddressItem from "../components/AddressItem";
import Overlay from "../components/Overlay";
import BaseUrl from "../components/BaseUrl";
import { useBasket } from "../../context/BasketContext";
import CloseIcon from "../../assets/svg/CloseIcon";
import GpsIcon from "../../assets/svg/GpsIcon";
import LocationIcon from "../../assets/svg/LocationIcon";
import TruckIcon from "../../assets/svg/TruckIcon";
import TruckFastIcon from "../../assets/svg/TruckFastIcon";
import ShoppingBagIcon from "../../assets/svg/ShoppingBagIcon";
export default function Complete() {
  const [stateDelivery, setStateDelivery] = useState("courier");
  const [addressArray, setAddressArray] = useState([]);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [nameAddress, setNameAddress] = useState("");
  const [phoneAddress, setPhoneAddress] = useState("");
  const [captionAddress, setCaptionAddress] = useState("");
  const [mainId, setMainId] = useState(null);
  const [captionOrder, setCaptionOrder] = useState("");
  const { dispatch } = useBasket();
  const getAddress = () => {
    fetch(`${BaseUrl}/address`)
      .then((res) => res.json())
      .then((data) => {
        setAddressArray(data);
        data.forEach((item) => {
          if (item.active) {
            dispatch({ type: "setAddressActive", payload: item.caption });
          }
        });
      });
  };
  const openEditModal = (id) => {
    fetch(`${BaseUrl}/address/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNameAddress(data.name);
        setCaptionAddress(data.caption);
        setPhoneAddress(data.phone);
        setMainId(data.id);
        setShowEditModal(true);
      });
  };
  const editAddressItem = () => {
    const newAddress = {
      userId: "1",
      caption: captionAddress,
      name: nameAddress,
      phone: phoneAddress,
      active: true,
    };
    fetch(`${BaseUrl}/address/${mainId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAddress),
    })
      .then((res) => res.json())
      .then(() => {
        setCaptionAddress("");
        setNameAddress("");
        setPhoneAddress("");
        setMainId(null);
        getAddress();
        closeEditModal();
      });
  };
  const activeAddressItem = (id) => {
    addressArray.forEach((item) => {
      const newItem = { active: false };
      fetch(`${BaseUrl}/address/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((res) => res.json())
        .then(() => {});
    });
    const newItem = { active: true };
    fetch(`${BaseUrl}/address/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then(() => {
        getAddress();
      });
  };
  const removeAddressItem = (id) => {
    fetch(`${BaseUrl}/address/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => getAddress());
  };
  const closeLocationModal = () => {
    setShowLocationModal(false);
  };
  const openLocationModal = () => {
    setShowLocationModal(true);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
    setShowAddressModal(false);
    setShowLocationModal(false);
    setCaptionAddress("");
    setNameAddress("");
    setPhoneAddress("");
    setMainId(null);
  };
  const closeAddressModal = () => {
    setShowAddressModal(false);
    setShowLocationModal(false);
  };
  const openAddressModal = () => {
    setShowAddressModal(true);
  };
  const addAddressItem = () => {
    addressArray.forEach((item) => {
      const newItem = { active: false };
      fetch(`${BaseUrl}/address/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((res) => res.json())
        .then(() => {});
    });
    const newAddressObj = {
      id: String(addressArray.length + 1),
      caption: captionAddress,
      name: nameAddress,
      user: "test",
      phone: phoneAddress,
      active: true,
    };
    fetch(`${BaseUrl}/address`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAddressObj),
    })
      .then((res) => res.json())
      .then(() => {
        getAddress();
        setShowAddressModal(false);
        setShowLocationModal(false);
        setNameAddress("");
        setPhoneAddress("");
        setCaptionAddress("");
      });
  };
  useEffect(() => {
    getAddress();
  }, []);
  return (
    <>
      <div className="col-span-1 lg:col-span-7 flex flex-col overflow-hidden">
        {/* state delivery */}
        <div className="border border-gray-400 rounded-lg p-4 md:py-8 md:px-6 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-2 w-full overflow-hidden">
          {/* title */}
          <h3 className="flex gap-1 items-center text-sm md:text-base pb-2 mb-2 md:mb-0 md:pb-0 border-b md:border-none border-gray-400 w-full md:w-auto">
            <TruckIcon size="w-4 md:w-6 h-4 md:h-6" />
            روش تحویل سفارش
          </h3>
          {/* radio input */}
          <button
            onClick={() => {
              setStateDelivery("courier");
              dispatch({ type: "sendCourier" });
            }}
            className={`${
              stateDelivery === "courier" ? "state__delivery--active" : ""
            } flex items-center gap-2`}
          >
            <span className="state__radio w-4 h-4 rounded-full border border-gray-400 p-1 relative"></span>
            <span className="flex items-center gap-1 text-gray-700 text-xs md:text-sm">
              ارسال توسط پیک
              <TruckFastIcon size="w-4 md:w-6 h-4 md:h-6" />
            </span>
          </button>
          {/* radio input */}
          <button
            onClick={() => {
              setStateDelivery("person");
              dispatch({ type: "sendPerson" });
            }}
            className={`${
              stateDelivery === "person" ? "state__delivery--active" : ""
            } flex items-center gap-2`}
          >
            <span className="state__radio w-4 h-4 rounded-full border border-gray-400 p-1 relative"></span>
            <span className="flex items-center gap-1 text-gray-700 text-xs md:text-sm">
              تحویل حضوری
              <ShoppingBagIcon size="w-4 md:w-6 h-4 md:h-6" />
            </span>
          </button>
        </div>
        {/* section wrapper */}
        <div className="flex flex-col mt-3 md:mt-6 overflow-hidden">
          {stateDelivery === "courier" ? (
            <div className="p-4 md:px-6 border border-gray-400 rounded-lg">
              {/* top wrapper */}
              <div
                className={`flex items-center justify-between pb-2 ${
                  addressArray.length ? "border-b border-gray-400" : ""
                } `}
              >
                {/* title */}
                <h3 className="flex items-center gap-1 text-sm md:text-base">
                  <LocationIcon size="w-4 md:w-6 h-4 md:h-6" />
                  آدرس‌ها
                </h3>
                {/* add address btn */}
                <button
                  onClick={openLocationModal}
                  className="add__address--btn text-primary flex items-center gap-1 text-xs"
                >
                  <span className="w-4 h-4 border border-primary flex-center rounded-full">
                    +
                  </span>
                  افزودن آدرس
                </button>
              </div>
              {/* empty address */}
              {addressArray.length ? (
                <div className="flex items-start justify-between flex-col xl:flex-row flex-wrap pt-4 gap-2 md:gap-4">
                  {addressArray.map((item, index) => (
                    <AddressItem
                      key={index + 1}
                      {...item}
                      onEdit={openEditModal}
                      onRemove={removeAddressItem}
                      onActive={activeAddressItem}
                    />
                  ))}
                  {/* <AddressItem caption='' name='' user='' phone=''/> */}
                </div>
              ) : (
                <Empty caption="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!" />
              )}
            </div>
          ) : (
            <div className="p-4 md:px-6 border border-gray-400 rounded-lg flex items-start justify-between">
              {/* right box */}
              <div className="flex flex-col items-start flex-grow flex-shrink-0">
                {/* title */}
                <h3 className="flex items-center gap-1 text-sm md:text-base pb-1 md:pb-0 border-b md:border-none w-full md:w-auto border-gray-400">
                  <LocationIcon size="w-4 md:w-6 h-4 md:h-6" />
                  آدرس شعبه اکباتان
                </h3>
                {/* address content */}
                <div className="flex flex-col gap-1 text-2xs md:text-xs mt-4 md:mt-6 text-gray-700 pr-3 md:pr-0">
                  {/* address text */}
                  <p className="">
                    شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                  </p>
                  {/* phone */}
                  <span>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
                  {/* phone */}
                  <span>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱</span>
                  {/* clock */}
                  <span>
                    ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
                  </span>
                </div>
                {/* map btn */}
                <button className="flex-center border border-gray-700 p-2 h-8 w-36 self-center mt-6 text-primary rounded text-xs">
                  مشاهده در نقشه
                </button>
              </div>
              {/* left box */}
              <img
                src="../src/assets/images/buy/map.webp"
                alt="map"
                className="h-full flex-grow w-64 hidden md:block rounded border border-gray-400"
              />
            </div>
          )}
        </div>
        {/* description textarea */}
        <textarea
          name="address"
          className="border border-gray-400 outline-none text-gray-700 mt-3 md:mt-6 rounded-lg p-4 text-sm"
          value={captionOrder}
          onChange={(e) => {
            setCaptionOrder(e.target.value);
            dispatch({
              type: "addCaption",
              payload: { caption: e.target.value },
            });
          }}
          rows="4"
          placeholder="توضیحات سفارش"
        ></textarea>
      </div>
      {showLocationModal && (
        <Overlay onHide={closeLocationModal}>
          <div className="fixed overflow-hidden rounded-lg bg-white w-full flex flex-col md:w-7/12 h-full md:h-3/4 inset-0 m-auto z-30 overflow-y-auto">
            {/* top wrapper */}
            <div className="bg-gray-100 flex items-center justify-between py-4 px-6 text-sm font-estedadMedium md:text-2xl md:font-estedadSemiBold">
              <h3 className="mx-auto">افزودن آدرس</h3>
              <button
                onClick={closeLocationModal}
                className="close__location--modal text-gray-700"
              >
                <CloseIcon size="w-6 h-6" />
              </button>
            </div>
            {/* content */}
            <div className="bg-map bg-center bg-cover relative py-8 px-6 flex flex-col items-center justify-between flex-grow">
              {/* top wrapper */}
              <div className="flex items-start justify-between text-primary w-full">
                {/* gps btn */}
                <button className="bg-white flex items-center gap-1 p-2 md:px-6 text-xs md:text-base md:font-estedadMedium">
                  <GpsIcon size="w-4 h-4 md:w-6 md:h-6" />
                  موقعیت من
                </button>
                {/* zoom wrapper */}
                <div className="flex flex-col gap-2">
                  {/* zoom in btn */}
                  <button className="flex-center bg-white w-8 md:w-10 h-8 md:h-10 rounded">
                    +
                  </button>
                  {/* zoom out btn */}
                  <button className="flex-center bg-white w-8 md:w-10 h-8 md:h-10 rounded">
                    -
                  </button>
                </div>
              </div>
              {/* bottom wrapper */}
              <div className="flex flex-col items-center gap-3 md:gap-6">
                {/* address text */}
                <p className="bg-white flex items-center gap-1 p-2 shadow-card rounded text-xs md:text-sm w-full md:w-96 mx-auto">
                  <LocationIcon size="w-4 h-4 md:w-6 md:h-6" />
                  ولیعصر، خیابان بزرگمهر، کوچه نسیم
                </p>
                {/* submit btn */}
                <button
                  onClick={openAddressModal}
                  className="bg-primary text-white text-xs md:text-base md:font-estedadMedium flex-center p-2 md:px-4 rounded w-64"
                >
                  ثبت موقعیت
                </button>
              </div>
            </div>
          </div>
        </Overlay>
      )}
      {showAddressModal && (
        <Overlay onHide={closeAddressModal}>
          <div className="fixed overflow-hidden rounded-lg bg-white w-full flex flex-col md:w-7/12 h-full md:h-5/6 inset-0 m-auto z-30 overflow-y-auto">
            {/* top wrapper */}
            <div className="bg-gray-100 flex items-center justify-between py-4 px-6 text-sm font-estedadMedium md:text-2xl md:font-estedadSemiBold">
              <h3 className="mx-auto">ثبت آدرس</h3>
              <button onClick={closeAddressModal} className="text-gray-700">
                <CloseIcon size="w-6 h-6" />
              </button>
            </div>
            <img
              src="../src/assets/images/buy/map.webp"
              alt="map"
              className="md:hidden h-60"
            />
            {/* form address */}
            <form
              className="flex flex-col mt-3 md:mt-6 text-xs md:text-sm px-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* address name */}
              <input
                type="text"
                className="w-full outline-none border border-gray-400 rounded p-2"
                placeholder="عنوان آدرس"
                value={nameAddress}
                onChange={(e) => setNameAddress(e.target.value)}
              />
              {/* checkbox input */}
              <div className="flex items-center gap-1 mt-3 md:mt-4">
                <input type="checkbox" name="address" />
                <label htmlFor="address">تحویل گیرنده خودم هستم.</label>
              </div>
              {/* phone */}
              <input
                type="text"
                className="w-full outline-none border border-gray-400 rounded p-2 mt-2"
                placeholder="شماره همراه"
                value={phoneAddress}
                onChange={(e) => setPhoneAddress(e.target.value)}
              />
              {/* address text */}
              <input
                type="text"
                className="w-full outline-none border border-gray-400 rounded px-2 mt-3 md:mt-4 pt-2 pb-24 md:pb-44 align-top"
                placeholder="آدرس دقیق شما"
                value={captionAddress}
                onChange={(e) => setCaptionAddress(e.target.value)}
              />
              {/* btn wrapper */}
              <div className="flex items-center gap-6 mt-6 md:mt-4 mb-2">
                {/* close */}
                <button
                  onClick={closeAddressModal}
                  className="text-primary flex-1"
                >
                  انصراف
                </button>
                {/* submit address */}
                <button
                  onClick={addAddressItem}
                  className="text-white bg-primary flex-1 flex-center rounded p-2"
                >
                  ثبت آدرس
                </button>
              </div>
            </form>
          </div>
        </Overlay>
      )}
      {showEditModal && (
        <Overlay onHide={closeEditModal}>
          <div className="fixed overflow-hidden rounded-lg bg-white w-full flex flex-col md:w-7/12 h-full md:h-5/6 inset-0 m-auto z-30 overflow-y-auto">
            {/* top wrapper */}
            <div className="bg-gray-100 flex items-center justify-between py-4 px-6 text-sm font-estedadMedium md:text-2xl md:font-estedadSemiBold">
              <h3 className="mx-auto">ثبت آدرس</h3>
              <button onClick={closeEditModal} className="text-gray-700">
                <CloseIcon size="w-6 h-6" />
              </button>
            </div>
            <img
              src="../src/assets/images/buy/map.webp"
              alt="map"
              className="md:hidden h-60"
            />
            {/* form address */}
            <form
              className="flex flex-col mt-3 md:mt-6 text-xs md:text-sm px-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {/* address name */}
              <input
                type="text"
                className="w-full outline-none border border-gray-400 rounded p-2"
                placeholder="عنوان آدرس"
                value={nameAddress}
                onChange={(e) => setNameAddress(e.target.value)}
              />
              {/* checkbox input */}
              <div className="flex items-center gap-1 mt-3 md:mt-4">
                <input type="checkbox" name="address" />
                <label htmlFor="address">تحویل گیرنده خودم هستم.</label>
              </div>
              {/* phone */}
              <input
                type="text"
                className="w-full outline-none border border-gray-400 rounded p-2 mt-2"
                placeholder="شماره همراه"
                value={phoneAddress}
                onChange={(e) => setPhoneAddress(e.target.value)}
              />
              {/* address text */}
              <input
                type="text"
                className="w-full outline-none border border-gray-400 rounded px-2 mt-3 md:mt-4 pt-2 pb-24 md:pb-44 align-top"
                placeholder="آدرس دقیق شما"
                value={captionAddress}
                onChange={(e) => setCaptionAddress(e.target.value)}
              />
              {/* btn wrapper */}
              <div className="flex items-center gap-6 mt-6 md:mt-4 mb-2">
                {/* close */}
                <button
                  onClick={closeEditModal}
                  className="text-primary flex-1"
                >
                  انصراف
                </button>
                {/* submit address */}
                <button
                  onClick={editAddressItem}
                  className="text-white bg-primary flex-1 flex-center rounded p-2"
                >
                  ثبت آدرس
                </button>
              </div>
            </form>
          </div>
        </Overlay>
      )}
    </>
  );
}
