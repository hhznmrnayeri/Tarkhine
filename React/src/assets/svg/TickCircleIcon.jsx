import React from "react";

export default function TickCircleIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        fill="currentColor"
        d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12S6.57 1.25 12.5 1.25 23.25 6.07 23.25 12 18.43 22.75 12.5 22.75zm0-20C7.4 2.75 3.25 6.9 3.25 12s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"
      ></path>
      <path
        fill="currentColor"
        d="M11.08 15.58a.75.75 0 01-.53-.22l-2.83-2.83a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.67 5.67a.75.75 0 01-.53.22z"
      ></path>
    </svg>
  );
}
