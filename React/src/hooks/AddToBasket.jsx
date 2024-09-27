import React from "react";
import BaseUrl from "../components/share/BaseUrl";
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

const updateBasketItem = async (id, count) => {
  const response = await fetch(`${BaseUrl}/basket/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ count }),
  });
  return response.json();
};

const addNewItemToBasket = async (id) => {
  const newItem = {
    id: String(Date.now()), // Using Date.now() for unique ID
    foodId: id,
    count: 1,
  };

  const response = await fetch(`${BaseUrl}/basket`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });

  return response.json();
};

export default async function AddToBasket(id) {
  try {
    const res = await fetch(`${BaseUrl}/basket`);
    const basketArray = await res.json();

    const basketItem = basketArray.find((item) => item.foodId === id);

    if (basketItem) {
      const newCount = basketItem.count + 1;
      await updateBasketItem(basketItem.id, newCount);
      showToast("1 عدد به تعداد غذای انتخابی شما در سبد خرید اضافه شد.");
    } else {
      await addNewItemToBasket(id);
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
