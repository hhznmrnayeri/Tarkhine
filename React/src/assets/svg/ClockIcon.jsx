import React from "react";

export default function ClockIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M8 15.167A7.173 7.173 0 01.833 8 7.173 7.173 0 018 .833 7.173 7.173 0 0115.166 8 7.173 7.173 0 018 15.167zM8 1.833A6.174 6.174 0 001.833 8c0 3.4 2.767 6.167 6.167 6.167S14.166 11.4 14.166 8 11.4 1.833 8 1.833z"
      ></path>
      <path
        fill="currentColor"
        d="M10.473 10.62a.447.447 0 01-.253-.073L8.153 9.313c-.513-.306-.893-.98-.893-1.573V5.007c0-.274.226-.5.5-.5.273 0 .5.226.5.5V7.74c0 .24.2.593.406.713l2.067 1.234a.5.5 0 01.173.686.514.514 0 01-.433.247z"
      ></path>
    </svg>
  );
}
