import React, { useEffect, useState } from "react";
import AddressItem from "../components/AddressItem";
import Empty from "../components/Empty";
import Overlay from "../components/Overlay";
import BaseUrl from "../components/BaseUrl";
import { useBasket } from "../../context/BasketContext";
import LocationIcon from "../../assets/svg/LocationIcon";
import CloseIcon from "../../assets/svg/CloseIcon";
import GpsIcon from "../../assets/svg/GpsIcon";
export default function LocationSection() {
  const [addressArray, setAddressArray] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [mainId, setMainId] = useState(null);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [nameAddress, setNameAddress] = useState("");
  const [phoneAddress, setPhoneAddress] = useState("");
  const [captionAddress, setCaptionAddress] = useState("");
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
      <section>
        {addressArray.length ? (
          <div className="mt-6 md:mt-4 w-full flex items-start justify-between flex-col xl:flex-row flex-wrap pt-4 gap-2 md:gap-4">
            {addressArray.map((item, index) => (
              <AddressItem
                key={index + 1}
                {...item}
                onEdit={openEditModal}
                onRemove={removeAddressItem}
                onActive={activeAddressItem}
              />
            ))}
          </div>
        ) : (
          <Empty caption="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!" btn="" />
        )}
        {/* add address btn */}
        <button
          onClick={openLocationModal}
          className="add__address text-primary border border-primary flex-center mt-6  text-xs rounded p-2 h-8 w-40 mx-auto"
        >
          افزودن آدرس جدید
        </button>
      </section>
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
            <form className="flex flex-col mt-3 md:mt-6 text-xs md:text-sm px-6">
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
      {showDeleteModal && (
        <Overlay onHide={closeDeleteModal}>
          <div className="deleteAll__modal fixed overflow-hidden rounded-lg bg-white w-11/12 md:w-5/12 h-48 md:h-56 inset-0 m-auto z-30">
            {/* top wrapper */}
            <div className="bg-gray-100 flex items-center justify-between py-4 px-6 text-sm font-estedadMedium md:text-2xl md:font-estedadSemiBold">
              <h3 className="mx-auto">حذف محصولات</h3>
              <button
                onClick={closeDeleteModal}
                className="close__deleteAll--modal text-gray-700"
              >
                <CloseIcon size="w-6 h-6" />
              </button>
            </div>
            {/* caption */}
            <p className="mt-3 md:mt-8 text-xs md:text-base text-center">
              همه محصولات سبد خرید شما حذف شود؟
            </p>
            {/* btn wrapper */}
            <div className="mt-8 flex-center gap-4 md:gap-5 px-16">
              {/* back btn */}
              <button
                onClick={closeDeleteModal}
                className="back__btn border border-primary rounded flex-center p-2 text-primary text-xs md:px-4 md:text-base md:font-estedadMedium flex-1"
              >
                بازگشت
              </button>
              {/* delete btn */}
              <button
                onClick={clearAllBasket}
                className="delete__btn bg-error-200 rounded flex-center p-2 text-error text-xs md:px-4 md:text-base md:font-estedadMedium flex-1"
              >
                حذف
              </button>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
}
