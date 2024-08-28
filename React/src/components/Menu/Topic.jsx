import React, { useState } from "react";
export default function Topic() {
  const [topic, setTopic] = useState("غذای اصلی");
  const changeTopic = (e) => {
    setTopic(e.target.innerHTML);
  };
  return (
    <div className=" bg-gray-300">
      <div className="container">
        <div className="flex items-center gap-4 md:gap-8 text-gray-700 text-xs md:text-xl py-1.5 md:py-3.5">
          <button
            onClick={(e) => changeTopic(e)}
            className={`${topic === "غذای اصلی" ? "topic__item--active" : ""}`}
          >
            غذای اصلی
          </button>
          <button
            onClick={(e) => changeTopic(e)}
            className={`${topic === "پیش غذا" ? "topic__item--active" : ""}`}
          >
            پیش غذا
          </button>
          <button
            onClick={(e) => changeTopic(e)}
            className={`${topic === "دسر" ? "topic__item--active" : ""}`}
          >
            دسر
          </button>
          <button
            onClick={(e) => changeTopic(e)}
            className={`${topic === "نوشیدنی" ? "topic__item--active" : ""}`}
          >
            نوشیدنی
          </button>
        </div>
      </div>
    </div>
  );
}
