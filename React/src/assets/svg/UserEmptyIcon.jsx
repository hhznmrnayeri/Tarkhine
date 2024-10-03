import React from "react";

export default function UserEmptyIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#353535"
        d="M8.001 8.5a3.838 3.838 0 01-3.833-3.833A3.838 3.838 0 018.001.833a3.838 3.838 0 013.834 3.834A3.838 3.838 0 018 8.5zm0-6.667a2.84 2.84 0 00-2.833 2.834A2.84 2.84 0 008.001 7.5a2.84 2.84 0 002.834-2.833A2.84 2.84 0 008 1.833zM13.727 15.167a.504.504 0 01-.5-.5c0-2.3-2.347-4.167-5.227-4.167-2.88 0-5.227 1.867-5.227 4.167 0 .273-.226.5-.5.5a.504.504 0 01-.5-.5C1.773 11.82 4.567 9.5 8 9.5c3.433 0 6.227 2.32 6.227 5.167 0 .273-.227.5-.5.5z"
      ></path>
    </svg>
  );
}
