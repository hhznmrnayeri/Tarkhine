import React from "react";

export default function CloseCircleIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 33 32"
    >
      <path fill="#FFF2F2" d="M0 0H32V32H0z" transform="translate(.5)"></path>
      <rect
        width="1.371"
        height="10.972"
        x="11.813"
        y="12.97"
        fill="#C30000"
        rx="0.686"
        transform="rotate(-45 11.813 12.97)"
      ></rect>
      <rect
        width="1.371"
        height="10.972"
        x="19.258"
        y="12"
        fill="#C30000"
        rx="0.686"
        transform="rotate(45 19.258 12)"
      ></rect>
      <path
        fill="#FFF2F2"
        d="M28.5 16c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zM6.18 16c0 5.7 4.62 10.32 10.32 10.32S26.82 21.7 26.82 16 22.2 5.68 16.5 5.68 6.18 10.3 6.18 16z"
      ></path>
      <path
        fill="#C30000"
        d="M4.5 16a12 12 0 0112-12v1.68A10.32 10.32 0 006.18 16H4.5zM16.5 28a12 12 0 01-12-12h1.68A10.32 10.32 0 0016.5 26.32V28zM28.5 16a12 12 0 01-12 12v-1.68A10.319 10.319 0 0026.82 16h1.68zM16.5 4a12 12 0 0112 12h-1.68A10.318 10.318 0 0016.5 5.68V4z"
      ></path>
    </svg>
  );
}
