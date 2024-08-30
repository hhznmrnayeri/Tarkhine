import React from "react";
import { NavLink } from "react-router-dom";
export default function State(props) {
  return (
    <div className="py-1.5 md:pt-4 flex items-center gap-4 md:gap-8 text-gray-700 text-xs md:text-xl">
      <NavLink
        to="/question"
        className={`${
          props.title === "question" ? "state__question--active" : ""
        }`}
      >
        سوالات متداول
      </NavLink>
      <NavLink
        to="/question/rules"
        className={(link) => (link.isActive ? "state__question--active" : "")}
      >
        قوانین ترخینه
      </NavLink>
      <NavLink
        to="/question/privacy"
        className={(link) => (link.isActive ? "state__question--active" : "")}
      >
        حریم خصوصی
      </NavLink>
    </div>
  );
}
