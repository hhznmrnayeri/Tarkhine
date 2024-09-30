import React from "react";
import Swal from "sweetalert2";
const showToast = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: message,
  });
};
const getBasket = () => {
  const basket = localStorage.getItem("tarkhine-basket");
  return basket ? JSON.parse(basket) : [];
};
const saveBasket = (basket) => {
  localStorage.setItem("tarkhine-basket", JSON.stringify(basket));
};
const updateBasketItem = (id, count) => {
  const basket = getBasket();
  const itemIndex = basket.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    basket[itemIndex].count = count;
  }
  saveBasket(basket);
};
const addNewItemToBasket = (id) => {
  const newItem = {
    id: String(Date.now()),
    foodId: id,
    count: 1,
  };
  const basket = getBasket();
  basket.push(newItem);
  saveBasket(basket);
};
export default async function AddToBasket(id) {
  try {
    const basket = getBasket();
    const basketItem = basket.find((item) => item.foodId === id);
    if (basketItem) {
      const newCount = basketItem.count + 1;
      updateBasketItem(basketItem.id, newCount);
      showToast("1 عدد به تعداد غذای انتخابی شما در سبد خرید اضافه شد.");
    } else {
      addNewItemToBasket(id);
      Swal.fire({
        title: "غذای انتخابی شما به سبد خرید اضافه شد",
        icon: "success",
      });
    }
  } catch (error) {
    console.error("Error adding to basket:", error);
    Swal.fire({
      title: "خطا در افزودن به سبد خرید",
      icon: "error",
    });
  }
}
