import React from "react";
import BaseUrl from "../view/components/BaseUrl";
import Swal from "sweetalert2";
export default async function AddFavorite(id, func) {
  const newItem = { isFavorite: true };
  const res = await fetch(`${BaseUrl}/foods/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  const data = await res.json().then(() => {
    Swal.fire({
      icon: "success",
      title: "غذای انتخابی شما به لیست علاقه مندی ها اضافه شد.",
    }).then(func);
  });
}
