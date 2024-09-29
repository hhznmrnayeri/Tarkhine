import React, { useState } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import ConvertToPersian from "../../hooks/ConvertToPersian";
const days = [
  { label: "ش", values: [6, 13, 20, 27, 4] },
  { label: "ی", values: [5, 12, 19, 26, 3] },
  { label: "د", values: [4, 11, 18, 25, 2] },
  { label: "س", values: [3, 10, 17, 24, 1] },
  { label: "چ", values: [2, 9, 16, 23, 30] },
  { label: "پ", values: [1, 8, 15, 22, 29] },
  { label: "ج", values: [30, 7, 14, 21, 28] },
];
export default function Calendar() {
  const [activeDay, setActiveDay] = useState(1);
  const changeActiveDay = (day) => {
    if (!day.disabled) {
      setActiveDay(day.value);
    }
  };
  return (
    <div className="absolute w-full sm:w-72 lg:w-full left-0 top-full bg-white rounded-lg shadow-card p-4 text-sm flex flex-col font-estedadMedium z-30">
      <div className="flex items-center justify-between">
        <button
          className="text-primary rounded-full border border-primary w-6 h-6 flex-center"
          onClick={(e) => e.preventDefault()}
        >
          <GoChevronRight className="w-4 h-4" />
        </button>
        <span className="font-estedadBold">اردیبهشت ۱۴۰۲</span>
        <button
          className="text-primary rounded-full border border-primary w-6 h-6 flex-center"
          onClick={(e) => e.preventDefault()}
        >
          <GoChevronLeft className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-start justify-between text-gray-700 mt-4">
        {days.map((dayGroup) => (
          <div
            key={dayGroup.label}
            className="flex flex-col items-center gap-2"
          >
            <span>{dayGroup.label}</span>
            {dayGroup.values.map((value, index) => {
              const isActive = activeDay === value;
              const isDisabled =
                (index === 0 && value > 7) || (index === 4 && value < 23);
              return (
                <button
                  key={value}
                  onClick={(e) => {
                    e.preventDefault();
                    changeActiveDay({ value, disabled: isDisabled });
                  }}
                  className={`day__calendar ${
                    isActive && !isDisabled ? "day__active" : ""
                  } ${isDisabled ? "day__disable" : ""}`}
                >
                  {ConvertToPersian(value)}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
