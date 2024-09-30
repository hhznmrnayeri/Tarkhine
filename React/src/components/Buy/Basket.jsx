import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { useBasket } from "../../context/BasketContext";
import BaseUrl from "../share/BaseUrl";
const getBasketArray = () => {
  const basket = localStorage.getItem("tarkhine-basket");
  return basket ? JSON.parse(basket) : [];
};
const saveBasketArray = (basketArray) => {
  localStorage.setItem("tarkhine-basket", JSON.stringify(basketArray));
};
export default function Basket() {
  const [basketArray, setBasketArray] = useState([]);
  const { dispatch } = useBasket();

  const foodItemCreator = async (foodArray) => {
    const foodPromises = foodArray.map(async (item) => {
      const foodResponse = await fetch(`${BaseUrl}/foods/${item.foodId}`);
      const foodData = await foodResponse.json();
      return { ...foodData, ...item };
    });
    const foodDataArray = await Promise.all(foodPromises);
    dispatch({ type: "updateBasket", payload: foodDataArray });
    setBasketArray(foodDataArray);
  };
  const updateCount = (id, newCount) => {
    const updatedBasket = basketArray.map((item) =>
      item.id === id ? { ...item, count: newCount } : item
    );
    saveBasketArray(updatedBasket);
    foodItemCreator(updatedBasket);
  };
  const increaseCount = (id, counter) => {
    updateCount(id, counter + 1);
  };
  const decreaseCount = (id, counter) => {
    if (counter > 1) {
      updateCount(id, counter - 1);
    }
  };
  const removeItemFromBasket = (id) => {
    const updatedBasket = basketArray.filter((item) => item.id !== id);
    saveBasketArray(updatedBasket);
    foodItemCreator(updatedBasket);
  };
  useEffect(() => {
    const initialBasket = getBasketArray();
    foodItemCreator(initialBasket);
  }, []);
  return (
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
  );
}
