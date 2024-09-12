import React, { useEffect, useState } from "react";
import Empty from "../share/Empty";
import BaseUrl from "../share/BaseUrl";
import { IoMdCheckmark } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import OrderItem from "./OrderItem";
export default function WalletSection() {
  const [orderArray, setOrderArray] = useState([]);
  const [filteredOrder, setFilteredOrder] = useState([]);
  const [filterItemActive, setFilterItemActive] = useState("همه");
  function getOrders() {
    fetch(`${BaseUrl}/order`)
      .then((res) => res.json())
      .then((data) => {
        setOrderArray(data);
        setFilteredOrder(data);
      });
  }
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <>
      <section>
        <div className="flex items-center gap-2 mt-2 md:mt-4">
          <button
            onClick={() => {
              setFilterItemActive("همه");
            }}
            className={`filter__item ${
              filterItemActive === "همه" ? "filter__item--active" : ""
            } text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}
          >
            <IoMdCheckmark className="tick__icon w-2.5 h-2.5" />
            <span>همه</span>
            <GoChevronLeft className="arrow__icon w-3 md:w-4 h-3 md:h-4" />
          </button>
          <button
            onClick={() => {
              setFilterItemActive("جاری");
            }}
            className={`filter__item ${
              filterItemActive === "جاری" ? "filter__item--active" : ""
            } text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}
          >
            <IoMdCheckmark className="tick__icon w-2.5 h-2.5" />
            <span>جاری</span>
            <GoChevronLeft className="arrow__icon w-3 md:w-4 h-3 md:h-4" />
          </button>
          <button
            onClick={() => {
              setFilterItemActive("تحویل شده");
            }}
            className={`filter__item ${
              filterItemActive === "تحویل شده" ? "filter__item--active" : ""
            } text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}
          >
            <IoMdCheckmark className="tick__icon w-2.5 h-2.5" />
            <span>تحویل شده</span>
            <GoChevronLeft className="arrow__icon w-3 md:w-4 h-3 md:h-4" />
          </button>
          <button
            onClick={() => {
              setFilterItemActive("لغو شده");
            }}
            className={`filter__item ${
              filterItemActive === "لغو شده" ? "filter__item--active" : ""
            } text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}
          >
            <IoMdCheckmark className="tick__icon w-2.5 h-2.5" />
            <span>لغو شده</span>
            <GoChevronLeft className="arrow__icon w-3 md:w-4 h-3 md:h-4" />
          </button>
        </div>
        {orderArray.length ? (
          <div className="flex flex-col gap-3 md:gap-4 w-full ">
            {filteredOrder.length ? (
              <div className="grid grid-cols-12 gap-x-4 gap-y-5 md:gap-y-6 mt-6 md:mt-8">
                {filteredOrder.reverse().map((item, index) => (
                  <OrderItem key={index + 1} {...item} />
                ))}
              </div>
            ) : (
              <div className="flex-center flex-col gap-4 py-40">
                {/* caption */}
                <p className="text-xs md:text-xl">
                  موردی با این مشخصات پیدا نکردیم!
                </p>
                {/* img */}
                <img
                  src="src/assets/images/home/undefined.webp"
                  alt="undefined"
                  className="w-40 md:w-96"
                />
              </div>
            )}
          </div>
        ) : (
          <Empty
            caption="شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!"
            btn="منوی رستوران"
            href="/menu"
          />
        )}
      </section>
    </>
  );
}
