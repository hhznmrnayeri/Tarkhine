import React from "react";

export default function InfoCircleIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#C30000"
        d="M8 15.167A7.173 7.173 0 01.833 8 7.173 7.173 0 018 .833 7.173 7.173 0 0115.166 8 7.173 7.173 0 018 15.167zM8 1.833A6.174 6.174 0 001.833 8c0 3.4 2.767 6.167 6.167 6.167S14.166 11.4 14.166 8 11.4 1.833 8 1.833z"
      ></path>
      <path
        fill="#C30000"
        d="M8 9.167a.504.504 0 01-.5-.5V5.333c0-.273.227-.5.5-.5s.5.227.5.5v3.334c0 .273-.227.5-.5.5zM8 11.333a.662.662 0 01-.254-.053.77.77 0 01-.22-.14.687.687 0 01-.14-.22.663.663 0 01-.053-.253c0-.087.02-.174.053-.254a.769.769 0 01.14-.22.77.77 0 01.22-.14.666.666 0 01.507 0 .77.77 0 01.22.14.77.77 0 01.14.22c.033.08.053.167.053.254 0 .086-.02.173-.053.253a.687.687 0 01-.14.22.77.77 0 01-.22.14.662.662 0 01-.253.053z"
      ></path>
    </svg>
  );
}
