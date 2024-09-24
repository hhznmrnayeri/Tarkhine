import React, { useEffect, useState } from "react";
import BaseUrl from "../share/BaseUrl";
import OrderItem from "./OrderItem";
import ConvertToPersian from "../../hooks/ConvertToPersian";
export default function Basket() {
  const [basketArray, setBasketArray] = useState([]);
  const [isLogin] = useState(true);
  const [sumPrices, setSumPrices] = useState(0);
  const [offPrices, setOffPrices] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  function getBasketArray() {
    setBasketArray([]);
    setSumPrices(0);
    setOffPrices(0);
    fetch(`${BaseUrl}/basket`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          fetch(`${BaseUrl}/foods/${item.foodId}`)
            .then((res) => res.json())
            .then((data) => {
              setSumPrices((prev) => prev + item.count * data.priceValue);
              if (data.offerPrice) {
                setOffPrices(
                  (prev) =>
                    prev + item.count * (data.offerPrice - data.priceValue)
                );
              }
              setBasketArray((prev) => [...prev, { ...data, ...item }]);
            });
        });
      });
  }
  const increaseCount = (id, counter) => {
    const newCount = { count: counter + 1 };
    fetch(`${BaseUrl}/basket/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCount),
    })
      .then((res) => res.json())
      .then(() => getBasketArray());
  };
  const decreaseCount = (id, counter) => {
    const newCount = { count: counter - 1 };
    fetch(`${BaseUrl}/basket/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCount),
    })
      .then((res) => res.json())
      .then(() => getBasketArray());
  };
  const removeItemFromBasket = (id) => {
    fetch(`${BaseUrl}/basket/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => getBasketArray());
  };
  useEffect(() => {
    getBasketArray();
  }, []);
  return (
    <>
      <div
        dir="ltr"
        className="col-span-1 lg:col-span-7 h-44 lg:h-[554px] overflow-y-auto flex flex-col md:p-6 md:gap-4 md:border md:border-gray-400 md:rounded-lg overflow-hidden"
      >
        {basketArray.map((item) => (
          <OrderItem
            key={item.id}
            {...item}
            onIncrease={increaseCount}
            onDecrease={decreaseCount}
            onRemove={removeItemFromBasket}
          />
        ))}
      </div>
      {/* <Empty
              caption="شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!"
              href="/menu"
              btn="منوی رستوران"
            /> */}
    </>
  );
}
