import React from "react";
import ListSection from "./ListSection";
import FoodItem from "./FoodItem";
export default function List({ foodList }) {
  return (
    <div className="mb-6 md:mb-12">
      {foodList.map((item) => (
        <ListSection key={item.id} title={item.title} btn={item.btn}>
          {item.foods.map((food) => (
            <FoodItem key={food.id} {...food} />
          ))}
        </ListSection>
      ))}
    </div>
  );
}
