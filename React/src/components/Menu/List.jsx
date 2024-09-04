import React from "react";
import ListSection from "./ListSection";
import FoodItem from "./FoodItem";
import AddToBasket from "../share/AddToBasket";
export default function List({ foodList }) {
  const addToBasket = (id) => {
    AddToBasket(id);
  };
  return (
    <div className="mb-6 md:mb-12">
      {foodList.map((item) => (
        <ListSection key={item.id} title={item.title} btn={item.btn}>
          {item.foods.map((food) => (
            <FoodItem key={food.id} {...food} onPlus={addToBasket} />
          ))}
        </ListSection>
      ))}
    </div>
  );
}
