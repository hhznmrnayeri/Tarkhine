import React from "react";

export default function LogoutIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M10.16 14.847h-.087c-2.96 0-4.387-1.167-4.633-3.78a.501.501 0 111-.094c.193 2.094 1.18 2.874 3.64 2.874h.086c2.714 0 3.674-.96 3.674-3.674V5.827c0-2.714-.96-3.674-3.674-3.674h-.086c-2.474 0-3.46.794-3.64 2.927a.506.506 0 01-1.007-.087c.227-2.653 1.66-3.84 4.64-3.84h.087c3.273 0 4.673 1.4 4.673 4.674v4.346c0 3.274-1.4 4.674-4.673 4.674z"
      ></path>
      <path
        fill="currentColor"
        d="M10 8.5H2.413a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5H10c.273 0 .5.227.5.5s-.227.5-.5.5z"
      ></path>
      <path
        fill="currentColor"
        d="M3.9 10.734a.495.495 0 01-.354-.147L1.313 8.354a.503.503 0 010-.707l2.233-2.233a.503.503 0 01.707 0 .503.503 0 010 .706L2.373 8l1.88 1.88a.503.503 0 010 .707.484.484 0 01-.353.147z"
      ></path>
    </svg>
  );
}
