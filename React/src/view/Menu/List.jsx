import React from "react";
import ListSection from "./ListSection";
import FoodItem from "./FoodItem";
import AddToBasket from "../../hooks/AddToBasket";
import AddFavorite from "../../hooks/AddFavorite";
import RemoveFavorite from "../../hooks/RemoveFavorite";
export default function List({ foodList, getFoods }) {
  const addToBasket = (id) => {
    AddToBasket(id);
  };
  const addFavorite = (id) => {
    AddFavorite(id, getFoods);
  };
  const removeFavorite = (id) => {
    RemoveFavorite(id, getFoods);
  };
  return (
    <div className="mb-6 md:mb-12">
      {foodList.map((item) => (
        <ListSection key={item.id} title={item.title} btn={item.btn}>
          {item.foods.map((food) => (
            <FoodItem
              key={food.id}
              {...food}
              onPlus={addToBasket}
              onLike={addFavorite}
              onDisLike={removeFavorite}
            />
          ))}
        </ListSection>
      ))}
    </div>
  );
}
