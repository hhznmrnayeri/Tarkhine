import React from "react";

export default function StarIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#F4B740"
        stroke="#CBCBCB"
        strokeWidth="0.25"
        d="M8 .405l1.677 5.161.028.087h5.519l-4.391 3.19-.074.054.028.086 1.677 5.162-4.39-3.19L8 10.9l-.073.054-4.392 3.19 1.678-5.162.028-.086-.074-.054-4.39-3.19H6.293l.029-.087L8 .405z"
      ></path>
    </svg>
  );
}
