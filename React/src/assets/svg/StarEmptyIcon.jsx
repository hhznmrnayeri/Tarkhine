import React from "react";

export default function StarEmptyIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        stroke="#F4B740"
        d="M12.5 1.618l2.219 6.828.112.346H22.374l-5.809 4.22-.294.213.113.346 2.218 6.828-5.808-4.22-.294-.213-.294.213-5.808 4.22 2.218-6.828.113-.346-.294-.213-5.809-4.22H10.17l.112-.346L12.5 1.618z"
      ></path>
    </svg>
  );
}
