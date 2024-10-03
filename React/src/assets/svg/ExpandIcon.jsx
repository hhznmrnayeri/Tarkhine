import React from "react";

export default function ExpandIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <g fill="currentColor">
        <path d="M62 45a2 2 0 00-2 2v13H47a2 2 0 100 4h15a2 2 0 002-2V47a2 2 0 00-2-2zM17 60H4V47a2 2 0 00-4 0v15a2 2 0 002 2h15a2 2 0 100-4zM17-.001H2a2 2 0 00-2 2v15a2 2 0 004 0v-13h13a2 2 0 000-4zM62-.001H47a2 2 0 000 4h13v13a2 2 0 004 0v-15a2 2 0 00-2-2z"></path>
      </g>
    </svg>
  );
}
