import React from "react";
import BaseUrl from "./BaseUrl";

export default async function RemoveFavorite(id, func) {
  const newItem = { isFavorite: false };
  const res = await fetch(`${BaseUrl}/foods/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  const data = await res.json().then(func);
}
