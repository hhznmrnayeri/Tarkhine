import React from "react";
import BaseUrl from "../components/share/BaseUrl";

export default async function AddFavorite(id, func) {
  const newItem = { isFavorite: true };
  const res = await fetch(`${BaseUrl}/foods/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  const data = await res.json().then(func);
}
