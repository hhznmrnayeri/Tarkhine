import React from "react";

export default function BoxIcon({ size }) {
  return (
    <svg
      className={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#CBCBCB"
        d="M8.002 8.867c.086 0 .173-.02.253-.067l5.887-3.407a.501.501 0 10-.507-.866l-5.633 3.26-5.6-3.24a.507.507 0 00-.687.18.507.507 0 00.18.686L7.742 8.8c.086.04.173.067.26.067z"
      ></path>
      <path
        fill="#CBCBCB"
        d="M8 14.907c.273 0 .5-.227.5-.5V8.36c0-.273-.227-.5-.5-.5s-.5.227-.5.5v6.047c0 .273.227.5.5.5z"
      ></path>
      <path
        fill="#CBCBCB"
        d="M8 15.167c.586 0 1.166-.127 1.626-.38l3.56-1.98c.967-.534 1.72-1.82 1.72-2.927V6.113c0-1.106-.753-2.386-1.72-2.926l-3.56-1.974c-.913-.506-2.34-.506-3.253 0l-3.56 1.98c-.967.534-1.72 1.82-1.72 2.927v3.767c0 1.106.753 2.386 1.72 2.926l3.56 1.974c.46.253 1.04.38 1.627.38zM8 1.833c.42 0 .833.087 1.14.254l3.56 1.98c.64.36 1.206 1.313 1.206 2.053v3.767c0 .733-.566 1.693-1.206 2.053l-3.56 1.98c-.607.34-1.674.34-2.28 0L3.3 11.94c-.64-.36-1.207-1.313-1.207-2.053V6.12c0-.733.567-1.693 1.207-2.053l3.56-1.98c.306-.167.72-.254 1.14-.254z"
      ></path>
      <path
        fill="#CBCBCB"
        d="M4.667 9.327c.274 0 .5-.227.5-.5V6.68l6.08-3.507c.24-.14.32-.446.18-.68a.493.493 0 00-.68-.18L4.421 5.967a.502.502 0 00-.254.433v2.44c0 .26.227.487.5.487z"
      ></path>
    </svg>
  );
}
