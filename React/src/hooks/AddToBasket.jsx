import React from "react";
import BaseUrl from "../components/share/BaseUrl";
import Swal from "sweetalert2";

export default async function AddToBasket(id) {
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
  let basketItem = null;
  const res = await fetch(`${BaseUrl}/basket`);
  const basketArray = await res.json();
  basketItem = basketArray.filter((item) => {
    return item.foodId === id;
  });
  if (basketItem.length) {
    const updateItem = { count: basketItem[0].count + 1 };
    fetch(`${BaseUrl}/basket/${basketItem[0].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "1عدد به تعداد غذای انتخابی شما در سبد خرید اضافه شد.",
        });
      });
  } else {
    const newItem = {
      id: String(basketArray.length + 1),
      foodId: id,
      count: 1,
    };
    fetch(`${BaseUrl}/basket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "غذای انتخابی شما به سبد خرید اضافه شد",
          icon: "success",
        });
      });
  }
}
