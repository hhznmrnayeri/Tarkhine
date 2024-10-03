import React from "react";

export default function ArrowUpIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M16 9.6c.933 0 1.867.36 2.573 1.067l8.694 8.693a1.006 1.006 0 010 1.413 1.006 1.006 0 01-1.414 0L17.16 12.08c-.64-.64-1.68-.64-2.32 0l-8.693 8.693a1.006 1.006 0 01-1.414 0 1.006 1.006 0 010-1.413l8.694-8.693A3.635 3.635 0 0116 9.6z"
      ></path>
    </svg>
  );
}
