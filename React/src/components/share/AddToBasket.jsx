import React from "react";
import BaseUrl from "./BaseUrl";

export default async function AddToBasket(id) {
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
        alert("plus to basket");
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
        alert("add to basket");
      });
  }
}
